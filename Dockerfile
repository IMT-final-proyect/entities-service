FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i -g @nestjs/cli
RUN npm install
COPY . .
EXPOSE 3002
CMD [ "npm", "run", "start" ]