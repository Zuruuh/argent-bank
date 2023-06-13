## Argent Bank Web App

For the installation, `cd` in the `apps/web` directory

### Installation
Install the project's dependencies
```bash
pnpm install
```

### Development
Now, run the local server with the following command:
```bash
pnpm run dev
```
The server should now be running on http://localhost:5173

### Build
To build the project for production, you can run the `build` script.  
All the bundled javascript, css, and images will be moved to the `dist` folder.

### Testing
The project uses `vitest` as a test runner. To run the test suite, start the `test` script.  
You can also generate a coverage report in the `coverage` directory using the `test:coverage` script.

### Component browser
The project uses `ladle` as the component browser. [Ladle](https://ladle.dev) is an alternative to [Storybook](https://storybook.js.org)
built and optimized for react. It has a simpler API and requires a lot less configuration and boilerplate.  

To start the browser server, run `pnpm run ladle` and go to http://localhost:61000

### Linting
The project uses both eslint and prettier to format and lint the project.  
You can use the `lint:*` script to run all linters.
