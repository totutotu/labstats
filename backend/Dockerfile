FROM node:8
RUN useradd --create-home --home-dir /app appuser
COPY . /app
WORKDIR /app
RUN chown --recursive appuser /app
USER appuser
RUN npm install
CMD ["npm", "start"]
