import "dotenv/config";

import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";

import { task } from "hardhat/config";
import { ethers } from "hardhat";
import { MarrowCollection } from "./typechain-types";

type MintArgs = {
  to: string;
  id: string;
  amount: string;
};

task("mint", "Mints marrow collection tokens")
  .addParam("to", "Address that will receive tokens")
  .addParam("id", "ID of the token that will be minted")
  .addParam("amount", "Amount of the token that will be minted")
  .setAction(async (args, hre) => {
    console.log(args);
    const { to, id, amount } = args as MintArgs;
    const MarrowCollection = await hre.ethers.getContractFactory(
      "MarrowCollection"
    );
    const marrowCollection = MarrowCollection.attach(
      "0xdDBCF88F9a0B2fAa21b1bCF72E25C434ca31C48A"
    ) as MarrowCollection;

    await (await marrowCollection.mint(to, id, amount)).wait();
    console.log("Done");
  });

export default {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/2ba26ed9b899465bb92b41ab6fd063af`,
      accounts: [process.env.PRIVATE_KEY],
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/2ba26ed9b899465bb92b41ab6fd063af",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
