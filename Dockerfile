FROM node:16-alpine3.16 AS build-app

WORKDIR /app

# COPY package*.json ./

# RUN npm install

COPY . .

RUN npm install

RUN npm run build



FROM node:16-alpine3.16

COPY --from=build-app dist app/dist

COPY server.js app/server.js

RUN npm install pm2 -g

CMD [ "pm2-runtime", "app/server.js" ]

