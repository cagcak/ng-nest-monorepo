FROM node:latest

WORKDIR /app

COPY ./package*.json ./

RUN npm install --legacy-peer-deps

COPY ./ .

CMD npm run build:ui \
    && npm run serve:ssr:public \
    && echo -e "Client Application is running at http://localhost:8080" \
    && tail -f /dev/null
