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

        /*
                //Fund it
                await giftContract.fund({ value: ethers.utils.parseEther("0.001") });
        
                console.log("funded with one ether, balance: ", await giftContract.getBalanceOfToken();
        
                //only allowed address can transfer funds, after deployment it is only the owner
                await expect(giftContract.connect(accounts[1]).withdraw()).to.be.reverted;
        
                await giftContract.defineNewAccessCondition(accounts[2].address, false);
        
                await expect(giftContract.withdraw()).to.be.reverted;
                await expect(giftContract.connect(accounts[1]).withdraw()).to.be.reverted;
                */
    });
});