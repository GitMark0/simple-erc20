import { ethers } from "hardhat";

import { MarrowToken__factory } from "../typechain-types";

const deployMarrowToken = async () => {
  const MarrowToken = (await ethers.getContractFactory(
    "MarrowToken"
  )) as MarrowToken__factory;
  const marrowToken = await MarrowToken.deploy({
    gasPrice: ethers.utils.parseUnits("7", "gwei"),
  });
  await marrowToken.deployed();

  console.log(`MarrowToken deployed at: ${marrowToken.address}`);

  const totalSupply = await marrowToken.totalSupply();
  console.log(`Total supply: ${totalSupply.toString()}`);
};

deployMarrowToken();
