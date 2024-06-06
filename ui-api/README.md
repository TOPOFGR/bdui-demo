## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Scaffolding
```
src/
├── exceptions/                              # Custom exceptions
│   └── BadRequest.tsx                       # First custom exception
│                 
├── templates/                               # All the JSONs related to the UI templates
│   └── home/                                # Home page JSONs
│                 
├── app.controller.ts                        # Controller layer for the first endpoints
│                                               # `getHello` first endpoint for a "Hello World" response
│                                               # `getHomePage` endpoint that uses the getHomePage service
│                                                 # sanitizes endpoint before calling the service
│
├── app.service.ts                           # Service layer of the first controller
│                                               # `getHomePage` service returns a JSON depending on the country received
│
└── types.ts                                 # All the custom typings
```
