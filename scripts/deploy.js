const hre = require("hardhat");

async function main() {
    const JuicyNaiad = await hre.ethers.getContractFactory("JuicyNaiad");
    const juicyNaiad = await JuicyNaiad.deploy();
    await juicyNaiad.deployed();
    console.log("JuicyNaiad deployed to:", juicyNaiad.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
