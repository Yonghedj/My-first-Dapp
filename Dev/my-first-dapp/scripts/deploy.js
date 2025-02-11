async function main() {
    const MyToken = await ethers.getContractFactory("contracts/MyToken.sol:MyToken");
    const myToken = await MyToken.deploy();

    await myToken.waitForDeployment();

    console.log("MyToken deployed to:", await myToken.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});