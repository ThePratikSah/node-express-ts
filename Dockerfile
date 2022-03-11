FROM node:17.6.0

WORKDIR /app

COPY . .

CMD [ "node", "index.ts" ]