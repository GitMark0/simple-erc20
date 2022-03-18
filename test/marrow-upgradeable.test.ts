import { ethers, upgrades } from "hardhat";
import {
  MarrowUpgradeable,
  MarrowUpgradeableV2,
  MarrowUpgradeableV2__factory,
  MarrowUpgradeable__factory,
} from "../typechain-types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";

describe("MarrowUpgradeable", async () => {
  let accounts: SignerWithAddress[];
  let deployer: SignerWithAddress;
  let marrowUpgradeable: MarrowUpgradeable;

  beforeEach(async () => {
    [deployer, ...accounts] = await ethers.getSigners();
  });

  it("Should successfully upgrade the contract", async () => {
    const x = 5;
    const MarrowUpgradeable = (await ethers.getContractFactory(
      "MarrowUpgradeable"
    )) as MarrowUpgradeable__factory;

    // Deploy proxy - deploys a proxy contract and an implementation contract
    marrowUpgradeable = (await upgrades.deployProxy(MarrowUpgradeable, [
      x,
    ])) as MarrowUpgradeable;

    const implAddress = await upgrades.erc1967.getImplementationAddress(
      marrowUpgradeable.address
    );

    const MarrowUpgradeableV2 = (await ethers.getContractFactory(
      "MarrowUpgradeableV2"
    )) as MarrowUpgradeableV2__factory;

    // Upgrade proxy - Proxy address stays the same, implementation address should change
    const marrowUpgraded = await upgrades.upgradeProxy(marrowUpgradeable, MarrowUpgradeableV2) as MarrowUpgradeableV2;

    const implAddressV2 = await upgrades.erc1967.getImplementationAddress(
      marrowUpgraded.address
    );
    
    // Implementation addresses should differ, proxies should stay the same
    expect(implAddressV2).to.not.equal(implAddress);
    expect(marrowUpgraded.address).to.equal(marrowUpgradeable.address);

    // This contract should have a y field and a setter for it
    let y = await marrowUpgraded.y();

    expect(y.eq(0)).to.be.true;

    await marrowUpgraded.setY("5");

    y = await marrowUpgraded.y();

    expect(y.eq(5)).to.be.true;
  });
});
