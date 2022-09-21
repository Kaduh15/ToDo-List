FROM node:16-alpine

WORKDIR /app-back

COPY package.json ./

RUN npm install

COPY . .

ENTRYPOINT ["npm"]
CMD ["run", "dev"]