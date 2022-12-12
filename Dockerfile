FROM node:16.18.1-alpine3.16 AS build-app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build



FROM node:16.18.1-alpine3.16

WORKDIR /app

COPY --from=build-app /app/dist /app/dist

COPY server.js /app/server.js

# init npm module and install express
RUN npm init -y
RUN npm install express

RUN npm install -g pm2

CMD [ "pm2-runtime", "/app/server.js" ]

