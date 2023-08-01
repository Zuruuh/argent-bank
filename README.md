# Argent Bank

## Prerequisites

## Web app

- [Node v18](https://nodejs.org/en/)
  - (Prefer installation with a tool like [fnm](https://github.com/Schniz/fnm) for dev environment)
- [pnpm v8](https://pnpm.io)
  - A faster alternative to npm, install with `npm i -g pnpm`

For detailled setup instructions, check [the web app's readme](apps/web/README.md)

## Api

> Disclaimer:  
> I did not code the api part; it was provided by openclassrooms (so you should probably only check the `web` folder)

The api provides a [docker compose](https://www.docker.com/products/docker-desktop/) file to simply run it without having to install all services and dependencies.  
This is the recommended way of running the api, but you can also install everything manually:

- [Node v12](https://nodejs.org/en/)
  - (Prefer installation with a tool like [fnm](https://github.com/Schniz/fnm) for dev environment)
- [docker](https://www.docker.com) (optionnal)

If you are not using docker, you will to install mongodb locally

For detailled setup instructions, check [the server's readme](apps/server/README.md)
