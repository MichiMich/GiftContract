require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");
require('hardhat-contract-sizer');
require("hardhat-gas-reporter");
require("dotenv").config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      loggingEnabled: true,
    },
    rinkeby: {
      url: process.env.url,
      accounts: [process.env.giftAccount, process.env.key1, process.env.key2, process.env.key3],
      gas: 2100000,
      gasPrice: 8000000000
    },
    ropsten: {
      url: process.env.url_ropsten,
      accounts: [process.env.key1, process.env.key2, process.env.key3],
      gas: 2100000,
      gasPrice: 8000000000
    },
    arbitrum: {
      url: process.env.ARBITRUM_RPC,
      accounts: [process.env.key1, process.env.key2, process.env.key3],
    },
    polygon: {
      url: "https://polygon-rpc.com",
      accounts: [process.env.giftAccount]
    }
  },
  etherscan: {
    apiKey: {
      rinkeby: "1TFN9YDIVEN2REUTW3CUTQERDFTKX6EQ21",
      arbitrumTestnet: "4HDG1XBV1YYDN26HMJI4GDPDQKFGM9XUC9",
      polygon: "DPGPHDEJFJCSNMATJ413YM7JTT44VPP6EP"
    }
  },
  mocha: {
    timeout: 600000,
    // reporter: 'eth-gas-reporter',
    // eporterOptions: {
    //   currency: 'USD', outputFile: 'gasreport.txt',
    //   url: 'http://localhost:8545'
    // }
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
    gasPrice: 19,
    coinmarketcap: process.env.CoinmarketcapApi,
    //outputFile: './createdData/gasreport.txt',
  }
};
