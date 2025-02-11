const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
    let MyToken, myToken, owner, addr1, addr2;

    beforeEach(async function () {
        MyToken = await ethers.getContractFactory("MyToken");
        myToken = await MyToken.deploy();
        await myToken.waitForDeployment();
        
        [owner, addr1, addr2] = await ethers.getSigners();
    });

    it("should return the correct name and symbol", async function () {
        expect(await myToken.name()).to.equal("MyToken");
        expect(await myToken.symbol()).to.equal("MTK");
    });

    it("should assign the total supply to the owner", async function () {
        expect(await myToken.balances(owner.address)).to.equal(100000);
    });

    it("should transfer tokens between accounts", async function () {
        await myToken.transfer(addr1.address, 100);
        expect(await myToken.balances(addr1.address)).to.equal(100);
    });    
});