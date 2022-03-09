import { ethers } from "hardhat";
import { MarrowToken__factory } from "../typechain-types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Signer } from "ethers";
import { expect } from "chai";

describe("MarrowToken", async () => {
  let accounts: SignerWithAddress[];
  let deployer: SignerWithAddress;

  beforeEach(async () => {
    [deployer, ...accounts] = await ethers.getSigners();
  });

  it("Should receive 100 ether of marrow tokens", async () => {
    const MarrowToken = (await ethers.getContractFactory(
      "MarrowToken"
    )) as MarrowToken__factory;
    const marrowToken = await MarrowToken.deploy();
    await marrowToken.deployed();
    
    const balanceExpected = ethers.utils.parseEther("100");
    const deployerBalance = await marrowToken.balanceOf(deployer.address);
    
    expect(balanceExpected.eq(deployerBalance)).to.be.true;
  });
});
