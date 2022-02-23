import { ethers } from 'hardhat';

const main = async () => {
  const [deployer] = await ethers.getSigners();

  const tx = {
    nonce: 0,
    to: ethers.constants.AddressZero,
    data: '0x',
    gasPrice: ethers.utils.parseUnits("7", "gwei"),
  };

  await deployer.sendTransaction(tx);
  console.log("Calncelled");
};

main();
