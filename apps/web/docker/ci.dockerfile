FROM node:18-alpine3.17

RUN apk add --update \
    git \
    docker-cli \
    docker-cli-compose && \
    npm i -g pnpm@^8.6.0
