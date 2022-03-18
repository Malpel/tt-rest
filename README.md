# tt-rest

## Running the program

Client url: http://localhost:3000

Server url: http://localhost:3001

API endpoint: http://localhost:3001/api/primes

In the client directory: install the dependencies with `npm install` and run the command `npm start` to start the client.

In the server direcotry: install the dependencies with `npm install` and run the command `npm start` to start the server.

Both the client and the server should be running to use the program. 

### Docker compose
Run the command `docker-compose up` in the project root directory to start both the client and the server automatically.

## Tests

Tests for the server can be executed with the command `npm test` in the server directory.

Client does not contain specific tests and instead its functionality is tested through the e2e-tests.

End-to-end -tests can be executed with the command `npm run test:e2e` in the client directory. Note: both the client and the server have to be running to execute the tests succesfully.

## Known issues

When submitting integers through the client pressing the enter-key will not submit the data. Instead, clicking the submit-button might be required.

Responds to negative integers with status 400. However, negative integers cannot be primes.

Trailing commas will result in status 400.

Building Docker images from the Dockerfiles will not work out of the box. This is because of the workflow.

## GitHub Actions -workflow

The [workflow](https://github.com/Malpel/tt-rest/blob/main/.github/workflows/test.yml) executes server-side tests and if they pass, builds Docker images of both the client and the server, and pushes both images to Docker Hub. 

## Improvements

This is a list of improvements this project could benefit from.

- Improved UI: the client is very bare-bones.

- Refactoring of the client-side code.

- More and better tests.

- Improved Actions-workflow: currently provides no client or e2e testing. 

- The server endpoint implementation might not be the most sensible.
