#!/bin/bash

[ ! -d node_modules ] && echo "Building fresh... clearing build directory & running installation scripts..."
echo "Cleaning up previous build..."
[ -d dist ] && rm -r dist
# echo "Checking for logs directory..."
# [ ! -d build/logs ] && mkdir build/logs
echo "Building API..."
npm run build
echo "Running post-build scripts..."
# ./dist.sh
echo "Killing possible previous applications"
pm2 kill
echo "Setting environment variables"
source .env
echo "Starting application..."
pm2 start ecosystem.config.js weshallprevail-api
