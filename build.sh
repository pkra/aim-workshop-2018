#!/bin/bash

for dir in $(find ./src/* -maxdepth 0 -type d)
do
    cd "$dir"
    npx remarker build
    mkdir -p "../../docs/${dir##*/}"
    cp -r build/* "../../docs/${dir##*/}/."
    cd ../..
done
