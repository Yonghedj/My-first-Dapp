# My First Hardhat DApp 🚀  
This project is a basic decentralized application (DApp) using Solidity for smart contracts and React for the frontend. It allows users to interact with Ethereum blockchain seamlessly.  

## Features  
- Connect Wallet 🔗 (MetaMask, WalletConnect) 
- Smart Contract Integration ⛓️ 
- Deploy & Interact with Smart Contracts 📝 
- Gas Fee Estimation ⛽ 
- More features coming soon... 

## How to Run  
```bash
# Install dependencies
npm install  

# Compile smart contract
npx hardhat compile  

# Start local blockchain
npx hardhat node  

# Deploy smart contract to local blockchain
npx hardhat run scripts/deploy.js --network localhost  

# Start frontend
npm start  

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
## License  
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
