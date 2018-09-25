FROM node:10.7.0

# Create app directory
WORKDIR /app

COPY package*.json ./

ENV PORT=8008

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.3.0/wait /wait

RUN chmod +x /wait
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

# RUN npm install
# If you are building your code for production
RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8008

CMD /wait && npm run db-loader && npm run start-prod