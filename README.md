# labstats

[![Build Status](https://travis-ci.org/totutotu/labstats.svg?branch=master)](https://travis-ci.org/totutotu/labstats)

A small CRUD-app for handling laboratory measurements reference values.

## Development

Requires node and docker-compose installations.

create a .env file to /backend with the following content:

```
DB_USER=root
DB_PASSWORD=example
DB_URI=mongodb://localhost:27017
```

Start the database by running 

```docker-compose up -f```

Install dependencies in both /backend and /frontend folders by running 

```npm i```

After which run in both locations

```npm run dev```

The app is now running at localhost:8080 . 

## Testing

In /backend run automated tests by:

```npm test```

Eslint is also used to manage code styling. Style checking can be done by running (either in /backend or in frontend)

```npm run lint```

## Deployment pipeline

Each push to git sets up travis to run tests and lint. After succeeding travis builds a Docker image and pushes it to Heroku registy and publishes the app. 
