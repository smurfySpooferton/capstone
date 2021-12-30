# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

## Prerequisits
Install:
- Git
- Node
- Docker
- Clone the Project Repo (`git clone https://github.com/smurfySpooferton/capstone.git`)

## Install
To install, download or clone the repo, then:

- Make sure to call all shell scripts from the project root (capstone folder)
- `sh shell/setup.sh` Follow the instructions and enter your mnemonic and infura key
- `npm install`
- `truffle compile`

## Zokrates
- Make sure your secrets folder (`capstone/secrets`), created by setup script, exists
- Start Docker
- Make sure to call all shell scripts from the project root (capstone folder)
- `sh shell/zokrates.sh`
- Within the created container: `sh code/run.sh`
- `sh shell/zokcp.sh` (Only one zokrates container may be running)

## Test
- Make sure to call all shell scripts from the project root (capstone folder)
- `sh shell/ganache.sh` (Starting ganache cli with your mnemonic)
- `truffle test`

## Contract addresses
- Migrations: 0xF74aBE3E7251dcE78ef210F7A9F1e258f0240f32
- Verifier: 0xbdA0d4d88A138Ce440a84B254ec6399b06f8F349
- SolnSquareVerifier: 0xADAb2549d0CfA8B34AFc97AC66717bAA67E79AF3

## OpenSea listing
- https://testnets.opensea.io/assets/0xadab2549d0cfa8b34afc97ac66717baa67e79af3/1
- https://testnets.opensea.io/assets/0xadab2549d0cfa8b34afc97ac66717baa67e79af3/2
- https://testnets.opensea.io/assets/0xadab2549d0cfa8b34afc97ac66717baa67e79af3/3
- https://testnets.opensea.io/assets/0xadab2549d0cfa8b34afc97ac66717baa67e79af3/4
- https://testnets.opensea.io/assets/0xadab2549d0cfa8b34afc97ac66717baa67e79af3/5

## ABI

Abi files can be found in the abi folder.

## Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
