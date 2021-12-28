// migrating the appropriate contracts
let Verifier = artifacts.require("./contracts/Verifier.sol");
let SolnSquareVerifier = artifacts.require("./contracts/SolnSquareVerifier.sol");
let Oraclize = artifacts.require("./contracts/Oraclize.sol");
let Mintable = artifacts.require("./contracts/ERC721Mintable.sol");

module.exports = function(deployer) {
  deployer.deploy(Verifier);
  deployer.deploy(SolnSquareVerifier);
  deployer.deploy(Oraclize);
  deployer.deploy(Mintable);
};
