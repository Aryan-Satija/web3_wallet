const hre = require("hardhat");
(async()=>{
	const transaction = await hre.ethers.deployContract("transaction");
	await transaction.waitForDeployment();
	console.log(`Contract deployed to ${transaction.target}`);
})()
.then(()=>{
    console.log('CONTRACT DEPLOYED SUCCESSFULLY ....');
    process.exit(0);
})
.catch((err)=>{
    console.log('SOMETHING WENT WRONG ....');
	console.log(err);
    process.exit(1);
})