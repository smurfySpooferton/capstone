#!/bin/bash

projectRoot=`pwd`
docker run -v "$projectRoot"/zokrates/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash