##
## docker run -it --rm -p 3000:3000 -v $(pwd):/node/app node_server node app/app.js

FROM node:latest

# Create app folder
RUN mkdir -p /node
WORKDIR /node

# Cache npm dependencies
COPY package.json /node/
RUN npm install
