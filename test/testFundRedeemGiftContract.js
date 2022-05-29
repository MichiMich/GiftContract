const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("fund contract", function () {
  let GiftContract;
  let giftContract;

  beforeEach(async function () {

    accounts = await hre.ethers.getSigners();

    GiftContract = await ethers.getContractFactory("GiftContract");
    giftContract = await GiftContract.deploy();
    await giftContract.deployed();
  })


  it("fund contract, allow singel address, redeem it", async function () {


    //Fund it
    await giftContract.fund({ value: ethers.utils.parseEther("0.001") });

    console.log("funded with one ether, balance: ", await giftContract.getBalance());

    //only allowed address can transfer funds, after deployment it is only the owner
    await expect(giftContract.connect(accounts[1]).getGift()).to.be.reverted;

    await giftContract.defineNewAccessCondition(accounts[2].address, false);

    await expect(giftContract.getGift()).to.be.reverted;
    await expect(giftContract.connect(accounts[1]).getGift()).to.be.reverted;

    await giftContract.connect(accounts[2]).getGift();

    expect(await giftContract.getBalance()).to.be.equal(0);

    console.log("balance after withdrew: ", await giftContract.getBalance());

    //set new allowed address
    await giftContract.defineNewAccessCondition(accounts[3].address, false);

    //fund it again, no other address will fund it
    await giftContract.connect(accounts[1]).fund({ value: ethers.utils.parseEther("0.002") });

    console.log("funded with 2 ether, balance: ", await giftContract.getBalance());

    expect(await giftContract.getBalance()).to.be.equal(ethers.utils.parseEther("0.002"));

    await expect(giftContract.connect(accounts[2]).getGift()).to.be.reverted;

    expect(await giftContract.connect(accounts[3]).getGift());

    expect(await giftContract.getBalance()).to.be.equal(0);

    console.log("balance after withdrew: ", await giftContract.getBalance());


  });


  it("fund contract, allow single address and anyone, redeem it", async function () {
    //Fund it
    await giftContract.fund({ value: ethers.utils.parseEther("0.001") });

    console.log("funded with one ether, balance: ", await giftContract.getBalance());

    await giftContract.defineNewAccessCondition(ethers.constants.AddressZero, true); //anyone can redeem

    //only allowed address can transfer funds, after deployment it is only the owner
    await giftContract.connect(accounts[1]).getGift();

    expect(await giftContract.getBalance()).to.be.equal(0);

    await giftContract.defineNewAccessCondition(ethers.constants.AddressZero, false);

    //Fund it
    await giftContract.fund({ value: ethers.utils.parseEther("0.001") });

    console.log("funded with one ether, balance: ", await giftContract.getBalance());

    await expect(giftContract.connect(accounts[1]).getGift()).to.be.reverted;

    await giftContract.defineNewAccessCondition(accounts[2].address, false);

    await expect(giftContract.connect(accounts[0]).getGift()).to.be.reverted;

    await giftContract.connect(accounts[2]).getGift();

    expect(await giftContract.getBalance()).to.be.equal(0);



  })

});
