const hre = require("hardhat");

async function main() {

    // We get the contract to deploy
    accounts = await hre.ethers.getSigners();
    console.log(accounts[0].address)

    GiftContract = await ethers.getContractFactory("GiftErc20Contract");
    giftContract = await GiftContract.deploy();
    await giftContract.deployed();

    console.log("giftContract deployed to:", giftContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
