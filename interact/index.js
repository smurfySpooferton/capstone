import Web3 from "web3";
import contract from "../build/contracts/SolnSquareVerifier.json";

const App = {
    web3: null,
    account: null,
    meta: null,

    start: async function() {
        const { web3 } = this;

        try {
            // get contract instance
            const networkId = await web3.eth.net.getId();
            const deployedNetwork = contract.networks[networkId];
            console.log(deployedNetwork);
            this.meta = new web3.eth.Contract(
                contract.abi,
                deployedNetwork.address,
            );
            // get accounts
            const accounts = await web3.eth.getAccounts();
            this.account = accounts[0];
        } catch (error) {
            console.error("Could not connect to contract or chain.");
            console.log(error);
        }
    },

    setStatus: function(message) {
        const status = document.getElementById("status");
        status.innerHTML = message;
    },

    mint: async function() {
        let { proof, inputs } = require('../test/data/proof.json');
        const { mintNft } = this.meta.methods;
        const id = document.getElementById("tokenId").value;
        await mintNft(this.account, id, proof, inputs).send({from: this.account, gas: 4500000});
        App.setStatus("Minted");
    }

};

window.App = App;

window.addEventListener("load", async function() {
    console.log("loaded");
    if (window.ethereum) {
        // use MetaMask's provider
        await window.ethereum.enable(); // get permission to access accounts
        App.web3 = new Web3(window.ethereum);
    } else {
        console.warn("No web3 detected.");
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        // App.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9545"),);
    }

    App.start();
});