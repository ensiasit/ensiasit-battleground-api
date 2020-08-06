FROM node:12.18.3-slim

WORKDIR /app

COPY package*.json  ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]
