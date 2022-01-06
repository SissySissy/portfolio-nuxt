FROM node:lts-alpine

ARG API_ENDPOINT
ENV API_ENDPOINT=$API_ENDPOINT

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

COPY . /usr/src/nuxt-app/
RUN npm install

RUN npm run build

EXPOSE 3000
ENV NUXT_HOST=0.0.0.0

CMD [ "npm", "start" ]