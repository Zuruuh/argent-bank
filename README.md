# Project #10 - Argent Bank API

This codebase contains the code needed to run the backend for Argent Bank.

## Getting Started

## Prerequisites

### Web app
- [Node v18](https://nodejs.org/en/)
    - (Prefer installation with a tool like [fnm](https://github.com/Schniz/fnm) for dev environment)

### Api
The api provides a [docker compose](https://www.docker.com/products/docker-desktop/) file to simply run it without having to install all services and dependencies.  
This is the recommended way of running the api, but you can also install everything manually:
 - [Node v12](https://nodejs.org/en/)
    - (Prefer installation with a tool like [fnm](https://github.com/Schniz/fnm) for dev environment)

### Instructions

1. Fork this repo
2. Clone the repo onto your computer
3. Open a terminal window in the cloned project
4. Run the following commands:

```bash
# Create environment config file
cp .env.example .env

# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

## Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

## Design Assets

Static HTML and CSS has been created for most of the site and is located in: `/designs`.

For some of the dynamic features, like toggling user editing, there is a mock-up for it in `/designs/wireframes/edit-user-name.png`.

And for the API model that you will be proposing for transactitons, the wireframe can be found in `/designs/wireframes/transactions.png`.
