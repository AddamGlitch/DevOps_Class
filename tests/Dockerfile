#build environment

FROM node:16.15.0 as build
WORKDIR /app
ENV PATH /app/node/node_module/.bin:$PATH
COPY package.json ./
# COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run test