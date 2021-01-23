## Description

This repository contains different [Nest](https://github.com/nestjs/nest) recipes. Base on the Typescript started template.

## Whats in this tamplate

- Env configuration with [@nestjs/config](https://docs.nestjs.com/techniques/configuration) for configuration loading and [joi](https://joi.dev/) for data validation.
- [morgan](https://github.com/expressjs/morgan#readme) for request logging.
- [lint-staged](https://github.com/okonet/lint-staged#configuration). Using Husky, prettier and eslint to ensure code quality.
- [class-validator](https://github.com/typestack/class-validator) and [class-transformer](https://github.com/typestack/class-transformer) for DTO validation and parse.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
