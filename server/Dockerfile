FROM node:16.8-alpine

WORKDIR /usr/src/server

COPY package* ./server

RUN npm ci

COPY . .

CMD npm start
