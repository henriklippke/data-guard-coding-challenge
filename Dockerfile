FROM node:18-alpine

WORKDIR /app

COPY /webapp/package*.json ./

RUN npm install

COPY /webapp/. .

EXPOSE 5173

CMD ["npm", "run", "dev"]