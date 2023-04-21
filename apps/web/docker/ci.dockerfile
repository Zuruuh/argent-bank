FROM node:18-alpine3.17

RUN apk add \
    git \
    docker \
    docker-compose && \
    npm i -g pnpm@^8
