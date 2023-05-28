FROM node:12-alpine3.15

ENV SERVER_PORT=3000
ENV NODE_ENV=development

WORKDIR /srv

## Installing dependencies first so we don't reinstall only when they change
## and not whenever the server code changes
COPY package-lock.json package.json /srv/

RUN npm ci

COPY . /srv/

EXPOSE $SERVER_PORT

CMD [ "npm", "run", "server" ]
