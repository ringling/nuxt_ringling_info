docker build -t ringling/personal-website .
docker push ringling/personal-website
doctl auth switch --context depl_ringling_info
doctl apps create-deployment d0b1af8b-e593-485b-adcd-0b9b066032cb