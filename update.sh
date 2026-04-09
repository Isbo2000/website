#!/bin/bash
echo "Updating website..."
cd website
git pull
sleep 3
docker restart website
sleep 3
echo "Website updated!"