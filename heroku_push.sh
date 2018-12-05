#!/bin/bash
echo "$HEROKU_TOKEN" | docker login -u "$HEROKU_USERNAME" --password-stdin registry.heroku.com
docker build -t totutotu/labstats .
docker push registry.heroku.com/$HEROKU_APP_NAME/web
heroku container:release web --app $HEROKU_APP_NAME
