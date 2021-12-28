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

## Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
