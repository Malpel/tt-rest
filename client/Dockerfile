FROM node:16.8-alpine as builder

WORKDIR /app

# github actions workflow won't work without ./client/
COPY ./client/package* ./

RUN npm ci

COPY ./client/ ./

RUN ls public && npm run build

FROM nginx:stable-alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
