import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    networks: {
        bsc_test: {
            url: "https://data-seed-prebsc-1-s3.binance.org:8545/",
            chainId: 97,
            accounts: [process.env.DEPLOYER_PRIV_KEY],
        },
    },
    solidity: "0.8.18",
    etherscan: {
        apiKey: process.env.API_KEY,
    },
};
