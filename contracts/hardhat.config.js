require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY =
  process.env.PRIVATE_KEY ||
  "0000000000000000000000000000000000000000000000000000000000000000";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    core_testnet: {
      url: "https://rpc.test2.btcs.network",
      chainId: 1114,
      accounts: [PRIVATE_KEY],
      gasPrice: "auto",
      verify: {
        etherscan: {
          apiUrl: "https://scan.test2.btcs.network",
          apiKey: process.env.CORE_EXPLORER_API_KEY || "",
        },
      },
    },
    core_mainnet: {
      url: "https://rpc.coredao.org/",
      chainId: 1116,
      accounts: [PRIVATE_KEY],
      gasPrice: "auto",
      verify: {
        etherscan: {
          apiUrl: "https://scan.coredao.org",
          apiKey: process.env.CORE_EXPLORER_API_KEY || "",
        },
      },
    },
  },
  etherscan: {
    apiKey: {
      core_testnet: process.env.CORE_EXPLORER_API_KEY || "",
      core_mainnet: process.env.CORE_EXPLORER_API_KEY || "",
    },
    customChains: [
      {
        network: "core_testnet",
        chainId: 1114,
        urls: {
          apiURL: "https://scan.test2.btcs.network/api",
          browserURL: "https://scan.test2.btcs.network",
        },
      },
      {
        network: "core_mainnet",
        chainId: 1116,
        urls: {
          apiURL: "https://scan.coredao.org/api",
          browserURL: "https://scan.coredao.org",
        },
      },
    ],
  },
  sourcify: {
    enabled: true,
  },
};
