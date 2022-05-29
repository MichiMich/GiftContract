const hre = require("hardhat");

async function main() {

    // We get the contract to deploy
    accounts = await hre.ethers.getSigners();

    GiftContract = await ethers.getContractFactory("GiftContract");
    giftContract = await GiftContract.deploy();
    await giftContract.deployed();

    console.log("giftContract deployed to:", giftContract.address);

    //fund it
    await giftContract.fund({ value: ethers.utils.parseEther("0.001") });

    //define who is allowed
    await giftContract.defineNewAccessCondition(accounts[2].address, false);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
