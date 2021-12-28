// migrating the appropriate contracts
let Verifier = artifacts.require("./eth-contracts/Verifier.sol");
let SolnSquareVerifier = artifacts.require("./eth-contracts/SolnSquareVerifier.sol");
let Oraclize = artifacts.require("./eth-contracts/Oraclize.sol");
let Mintable = artifacts.require("./eth-contracts/ERC721Mintable.sol");

module.exports = function(deployer) {
  deployer.deploy(Verifier);
  deployer.deploy(SolnSquareVerifier);
  deployer.deploy(Oraclize);
  deployer.deploy(Mintable);
};
