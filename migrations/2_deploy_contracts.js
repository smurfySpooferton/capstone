// migrating the appropriate contracts
let Verifier = artifacts.require("./Verifier.sol");
let SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function (deployer) {
  deployer.deploy(Verifier)
      .then(() => {
        return deployer.deploy(SolnSquareVerifier, Verifier.address)
      });
}