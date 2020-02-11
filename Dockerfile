FROM node

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN yarn install

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]