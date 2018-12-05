FROM node:8

RUN useradd --create-home --home-dir /app appuser

WORKDIR /app
COPY . /app

RUN chown --recursive appuser /app

USER appuser:appuser

RUN npm install
RUN npm run build

CMD ["npm", "start"]