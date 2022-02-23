import "dotenv/config";

import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";

export default {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/2ba26ed9b899465bb92b41ab6fd063af`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
