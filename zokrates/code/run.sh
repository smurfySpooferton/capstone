#!/bin/bash

#Taken from:
#https://zokrates.github.io/gettingstarted.html

# compile
zokrates compile -i code/square/square.code
# perform the setup phase
zokrates setup
# execute the program
zokrates compute-witness -a 337 113569
# generate a proof of computation
zokrates generate-proof
# export a solidity verifier
zokrates export-verifier
# or verify natively
zokrates verify