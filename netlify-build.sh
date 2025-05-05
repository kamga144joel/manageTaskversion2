#!/bin/bash

# Clear and rebuild the project
rm -rf node_modules .output
npm ci
npm run build

# Ensure the output directory exists
mkdir -p .output/public
