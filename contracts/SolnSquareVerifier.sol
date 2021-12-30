pragma solidity ^0.8.0;

import './ERC721Mintable.sol';
import './Verifier.sol';

// DONE define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
interface TxVerifier {
    function verifyTx(Verifier.Proof memory proof, uint[2] memory input) external view returns (bool r);
}

// DONE define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is UdacityBlockchainDeveloperCapstone {
    // DONE define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 index;
        address account;
    }

    // DONE define an array of the above struct
    Solution[] private _solutions;

    // DONE define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) private _uniqueSolutions;

    // DONE Create an event to emit when a solution is added
    event DidAddSolution(address account);

    TxVerifier private verifier;

    constructor(address verifierAddress) {
        verifier = TxVerifier(verifierAddress);
    }

    // DONE Create a function to add the solutions to the array and emit the event
    function addSolution(bytes32 solutionId, uint256 tokenId, address account) public {
        require(_uniqueSolutions[solutionId].account == address(0), "Solution not unique");
        Solution memory solution = Solution({index: tokenId, account: account });
        _solutions.push(solution);
        _uniqueSolutions[solutionId] = solution;
        emit DidAddSolution(solution.account);
    }

    function getSolutionID(uint256 tokenId, Verifier.Proof memory proof, uint[2] memory input) public pure returns(bytes32) {
        return keccak256(abi.encodePacked(tokenId, proof.a.X, proof.a.Y, proof.b.X, proof.b.Y, proof.c.X, proof.c.Y, input));
    }

    // DONE Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mintNft(address to, uint256 tokenId, Verifier.Proof memory proof, uint[2] memory input) public {
        bytes32 solutionId = getSolutionID(tokenId, proof, input);
        require(_uniqueSolutions[solutionId].account == address(0), "Solution not unique");
        require(verifier.verifyTx(proof, input), "Solution not verified");
        addSolution(solutionId, tokenId, to);
        super.mint(to, tokenId);
    }
}






