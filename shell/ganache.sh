#!/bin/bash

mnemonic=`cat secrets/mnemonic`
ganache-cli -p 8545 --mnemonic "$mnemonic" --defaultBalanceEther 10000000 --accounts=100