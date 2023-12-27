<img src="./assets/images/icon.png" align="right" width="120" height="120" />

# startkit-expo

> A sane starting point for [Expo](https://expo.dev) projects.

## Features

- The latest [Expo 50](https://expo.dev) SDK.
- [Expo Router](https://docs.expo.dev/router/introduction/)
- Toasts!
- [TailwindCSS](https://tailwindcss.com/) for utility-first CSS via [Nativewind v4](https://www.nativewind.dev/v4/overview).
- Built-in Dark Mode support
- CSS Variables for themes
- Async preloading with splash screen
- [Bun](https://bun.sh) as a package manager
- [Typescript](https://www.typescriptlang.org/) for a rock-solid codebase
- Strict, recommended [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) config using the [Vercel Style Guide](https://github.com/vercel/style-guide) for readable, safe code.
- Extra linting power with [Oxlint](https://oxc-project.github.io)
- [Jest](https://jestjs.io/) testing, optimized for Expo.

## Starting a new project with StartKit

1. Clone this repo to your desired path:

   ```sh
   git clone git@github.com:startkit-dev/startkit-expo.git my-new-project
   ```

2. Rename the project in `app.json` and `package.json`

3. Update your git remote to point to StartKit as `upstream`

   ```sh
   git remote rename origin upstream
   ```

   In the future, you'll be able to pull in the latest StartKit changes without
   missing a beat by running:

   ```sh
   git fetch upstream
   git pull upstream/main
   ```

## Installation

First, run the setup script to install all dependencies and create a local `.env.local` file:

```sh
bun run setup
```

## Running the app

```sh
bun run dev
```

## Linting / Checking the codebase

To run a full check of the codebase (type-check, lint, prettier check, test), run:

```sh
bun run check
```

### Linting

```sh
bun run lint
```

```sh
bun run oxlint
```

### Type Checking

```sh
bun run type-check
```

### Formatting with Prettier

```sh
bun run format
```

to check for format errors, run:

```sh
bun run format:check
```

### Testing via Jest

```sh
bun run test
```

## ❤️ Open Source

This project is MIT-licensed and is free to use and modify for your own projects.

It was created by [Matt Venables](https://venabl.es).
