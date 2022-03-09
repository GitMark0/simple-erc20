import { ethers } from "hardhat";

import { MarrowCollection__factory } from "../typechain-types";

const deployMarrowCollection = async () => {
  const MarrowCollection = (await ethers.getContractFactory(
    "MarrowCollection"
  )) as MarrowCollection__factory;
  const marrowCollection = await MarrowCollection.deploy();
  await marrowCollection.deployed();

  console.log(`MarrowCollection deployed at: ${marrowCollection.address}`);
};

deployMarrowCollection();
