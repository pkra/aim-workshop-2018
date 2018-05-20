#!/bin/bash

for dir in $(find ./src/* -maxdepth 0 -type d)
do
    cd "$dir"
    npx remarker build
    mkdir -p "../../doc/${dir##*/}"
    cp -r build/* "../../doc/${dir##*/}/."
    cd ..
done
