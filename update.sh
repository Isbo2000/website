#!/bin/bash
echo "Updating website..."
cd website
git pull
docker restart website
echo "Website updated!"