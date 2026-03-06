#!/bin/bash
set -e

echo "→ Pulling latest code..."
git pull 

echo "→ Building Docker image..."
docker build -t ringling/personal-website . 


echo "→ Stopping old container (if running)..."
docker stop ringling_info 2>/dev/null || true
docker rm   ringling_info 2>/dev/null || true

echo "→ Starting new container..."
docker run -d --name ringling_info -p 8080:3000 ringling/personal-website