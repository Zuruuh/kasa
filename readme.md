# Kasa

## Requirements

- Node ^16 (use [fnm](https://github.com/Schniz/fnm) if possible)
- pnpm ^7 (install with `npm i -g pnpm`)

## Installation

Install dependencies using pnpm

```bash
pnpm install
```

## Development

Start the dev server using the `dev` script

```bash
pnpm run dev
```

This project also uses [storybook](storybook.js.org/) to isolate components & display them.  
Start your local storybook environment with the `storybook` script

```bash
pnpm run storybook
```

## Testing

Run unit/functionnal tests with the `test` script

```bash
pnpm run test
```

Generate a coverage report using the `coverage` script

```bash
pnpm run coverage
```

The coverage report will be generated in html format in the `./coverage` dir

## Prod

Build the project for prod using the `build` script

```bash
pnpm run build
```

The build output will be located in the `./dist` dir

## Linting

Eslint and prettier are configured on this project. If you do any modification, make sure you respect their rules.  
Prettier is integrated with eslint so you only need to use the later. Run the check script using

```bash
pnpm run lint:eslint
```

Lastly, we also use the typescript transpiler for some basic checks (no unused parameters, variables, properties, etc...).  
Use the following command to run it:

```bash
pnpm run lint:typescript
```

## CI

The linting commands listed above will be ran in CI (github actions) whenever you push to a branch or create a pull request.  
All of them must pass in order to be merged on `dev` branch.

## Routing

This project uses [React Router ^6](https://reactrouter.com/en/main) to handle in-browser routing.  
Unlike what's commonly seen in projects using with this library, the routing is not handled in a **huge** `Router.tsx` file.  
The routing configuration for each page is managed directly in the page file, where it is exported.  
This allows to work more easily and split code more efficiently.
If you are looking for the url of a page, you won't have to look through tons of nested url matchers/loaders/actions/etc...
