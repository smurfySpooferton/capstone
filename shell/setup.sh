#!/bin/bash

mkdir -p secrets
read -p "Please enter mnemonic:" mnemonic
echo $mnemonic >| secrets/mnemonic #echo to avoid linebreaks
read -p "Please enter infura secret:" infura
echo $infura >| secrets/infura