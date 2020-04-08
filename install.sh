#!/bin/bash
echo 'installing all examples...'
SCRIPTPATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
npm install
echo 'installing eslint example'
cd examples/eslint && npm install
cd $SCRIPTPATH
echo 'installing mdx in react example'
cd examples/mdx && npm install
cd $SCRIPTPATH
echo 'installing plugins example'
cd examples/plugin && npm install
cd $SCRIPTPATH
echo 'installing styles example'
cd styling && npm install
cd $SCRIPTPATH