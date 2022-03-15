FROM node:16.8-alpine

WORKDIR /usr/src/server

# github action workflow won't work without ./server/
COPY ./server/package* ./

RUN npm ci

COPY . ./

CMD npm start
