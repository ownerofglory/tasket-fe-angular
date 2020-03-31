FROM nginx:1.17.1-alpine

RUN ng build --prod
COPY dist/my-tasks /usr/share/nginx/html