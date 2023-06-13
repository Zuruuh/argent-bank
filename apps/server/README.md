## Dockerless server setup

Run the following commands at the root of the project

```bash
# Create environment config file
cp .env.example .env

# Install dependencies
npm run server:dockerless:install

# Start local dev server
npm run server:dockerless:start

# Populate database with two users
npm run server:dockerless:seed
```

Your server should now be running at http://locahost:3000 by default and you will now have two users in your MongoDB database!

*Tony Stark*

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

*Steve Rogers*

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3000/api-docs
