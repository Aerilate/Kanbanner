FROM node:10-alpine as build-step

RUN mkdir /app
WORKDIR /app

COPY ./package.json .
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
ENTRYPOINT [ "npm", "run", "start" ]
