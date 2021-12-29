let SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
let Verifier = artifacts.require('Verifier');
let owner;

async function setup(accounts) {
    owner = accounts[1];
    let verifier = await Verifier.new({ from: owner });
    this.contract = await SolnSquareVerifier.new(verifier.address, { from: owner });
}

contract('SolnSquareVerifier Tests', async (accounts) => {
    beforeEach(async function () {
        await setup(accounts);
    });
    // Test if a new solution can be added for contract - SolnSquareVerifier
    it('Test if a new solution can be added for contract - SolnSquareVerifier', async function () {
        let { proof, inputs } = require('./data/proof.json');
        let added = 0;
        try {
            let solutionId = await contract.getSolutionID(proof, inputs);
            await contract.addSolution(solutionId, 1, owner);
            added += 1;
            await contract.addSolution(solutionId, 1, owner);
            added += 1;
        } catch (e) {
            assert.equal(added, 1, "Incorrect count for added solutions");
            assert.equal(e.reason, "Solution not unique", "Incorrect rejection");
        }
    });

    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it('Test if an ERC721 token can be minted for contract - SolnSquareVerifier', async function () {
        let { proof, inputs } = require('./data/proof.json');
        let newOwner = accounts[2];
        let balance = 0;
        try {
            await contract.mintNft(newOwner, 15, proof, inputs, { from: owner });
            balance = await contract.balanceOf.call(newOwner);
        } catch (e) {
            console.log(e);
        }
        assert.equal(balance, 1, "Incorrect balance");
    });

    it('Test if an ERC721 minting fails for invalid proof - SolnSquareVerifier', async function () {
        let { proof, inputs } = require('./data/proof-invalid.json');
        let newOwner = accounts[2];
        try {
            await contract.mintNft(newOwner, 15, proof, inputs, { from: owner });
            assert.equal(true, false, "Minting NFT should throw exception");
        } catch (e) {
            assert.equal(e.reason, "Solution not verified", "Incorrect rejection");
        }
    });
});



