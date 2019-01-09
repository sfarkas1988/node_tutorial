FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Bundle app source <-- what does that mean???
COPY . .

EXPOSE 8080

CMD ["npm", "start"]
