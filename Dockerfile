FROM node:12.7-alpine AS build
CMD gunicorn --bind 0.0.0.0:$PORT wsgi
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build