FROM node:17 as build

WORKDIR /app

COPY src src
COPY package.json tsconfig.json ./

RUN npm i;\
    npm run build

FROM node:17

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/build ./

CMD ["node", "app.js"]

