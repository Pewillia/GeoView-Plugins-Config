# syntax=docker/dockerfile:1

FROM node:17.4.0 as build
ENV NODE_ENV=development
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json


RUN npm ci --development

COPY . .

RUN npm run build

# NDINX Web Server
FROM nginx:1.21.6-alpine as dev

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx","-g", "daemon off;"]