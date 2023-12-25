FROM node:latest As development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]

FROM node:latest as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

COPY --from=development /app/dist ./dist

CMD ["npm", "run", "start:prod"]
