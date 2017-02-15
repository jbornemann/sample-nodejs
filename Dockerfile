FROM node:slim

WORKDIR /opt/app-root/src

COPY . /opt/app-root/src
RUN npm install

EXPOSE 8080
