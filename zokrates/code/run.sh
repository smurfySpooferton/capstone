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
mv proof.json proof2.json
zokrates compute-witness -a 337 113568
# generate a proof of computation
zokrates generate-proof
mv proof.json proof3.json
zokrates compute-witness -a 337 113567
# generate a proof of computation
zokrates generate-proof
mv proof.json proof4.json
zokrates compute-witness -a 337 113566
# generate a proof of computation
zokrates generate-proof
mv proof.json proof5.json
zokrates compute-witness -a 337 113565
# generate a proof of computation
zokrates generate-proof
mv proof.json proof1.json

# export a solidity verifier
zokrates export-verifier
# or verify natively
zokrates verify