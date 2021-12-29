var ERC721MintableComplete = artifacts.require('UdacityBlockchainDeveloperCapstone');

contract('TestERC721Mintable', accounts => {

    let owner = accounts[0];
    let account_one = accounts[5];
    let account_two = accounts[6];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: owner});
            for (let i = 1; i < 11; i++) {
                try {
                    await this.contract.mint(account_one, i, { from: owner });
                    await this.contract.mint(account_two, i + 100, { from: owner });
                } catch (e) {
                    console.log(e);
                }
            }
        })

        it('should return total supply', async function () {
            let result = 0;
            try {
                result = await this.contract.totalSupply.call();
            } catch (e) {
                console.log(e);
            }
            assert.equal(result, 20, "Incorrect total suppy");
        })

        it('should get token balance', async function () {
            let balance1 = 0;
            let balance2 = 0;
            try {
                balance1 = await this.contract.balanceOf(account_one);
                balance2 = await this.contract.balanceOf(account_two);
            } catch (e) {
                console.log(e);
            }
            assert.equal(balance1, 10, 'Incorrect account balance');
            assert.equal(balance2, 10, 'Incorrect account balance');
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {
            let result;
            try {
                result = await this.contract.tokenURI(1);
                result = cleanString(result);
            } catch (e) {
                console.log(e);
            }
            assert.equal(result, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", 'Incorrect URI');
        })

        it('should transfer token from one owner to another', async function () {
            let result;
            try {
                await this.contract.transferFrom(account_one, account_two, 1, { from: account_one });
                result = await this.contract.ownerOf(1);
            } catch (e) {
                console.log(e);
            }
            assert.equal(result, account_two, 'Incorrect owner');
        })
    });

    function cleanString(string) {
        let utf8Encode = new TextEncoder();
        let bytes = utf8Encode.encode(string);
        bytes = bytes.filter(function(number) { return number !== 0; });
        let result = new TextDecoder().decode(bytes);
        return result;
    }

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: owner});
        })

        it('should fail when minting when address is not contract owner', async function () {
            try {
                await this.contract.mint(account_two, 20, { from: account_two });
                assert.equal(true, false, "Minting should throw exception");
            } catch (e) {
                assert.equal(e.reason, "Caller is not contract owner", "Incorrect rejection.");
            }
        })

        it('should return contract owner', async function () {
            let result;
            try {
                result = await this.contract.owner();
            } catch (e) {
                console.log(e);
            }
            assert.equal(result, owner, 'Incorrect owner');
        })
    });
})