#!/bin/bash

projectRoot=`pwd`/

containerId=$(docker ps -l --filter "ancestor=zokrates/zokrates" -q) #assume there is only one zokrates container running
containerPath=/home/zokrates/

docker cp $containerId:$containerPath"abi.json" $projectRoot"secrets/"
docker cp $containerId:$containerPath"out" $projectRoot"secrets/"
docker cp $containerId:$containerPath"proof.json" $projectRoot"secrets/"
docker cp $containerId:$containerPath"proving.key" $projectRoot"secrets/"
docker cp $containerId:$containerPath"verification.key" $projectRoot"secrets/"
docker cp $containerId:$containerPath"verifier.sol" $projectRoot"contracts/Verifier.sol"
docker cp $containerId:$containerPath"witness" $projectRoot"secrets/"