async function main () {
    const Mood = await ethers.getContractFactory("Mood");
    const mood = await Mood.deploy();

    await mood.deployed();

    console.log("Mood contract deployed to:", mood.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});