FROM node:12.16.2

RUN rm /usr/local/bin/yarn

RUN npm i -g yarn @nestjs/cli typescript --force

WORKDIR /usr/src/app

COPY src src
COPY fixtures fixtures
COPY migrations migrations
COPY .env .env
COPY nest-cli.json nest-cli.json
COPY ormconfig.js ormconfig.js
COPY package.json package.json
COPY tsconfig.build.json tsconfig.build.json
COPY tsconfig.json tsconfig.json
COPY yarn.lock yarn.lock

ENV NODE_ENV prod

RUN yarn
RUN yarn build

EXPOSE 3000

CMD ["node", "dist/main.js"]
