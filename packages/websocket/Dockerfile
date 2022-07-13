From node:16.15.0-alpine
RUN mkdir -p /home/websocket

COPY . /home/websocket

# set default dir so that next commands executes in /home/app dir
WORKDIR /home/websocket

# will execute npm install in /home/app because of WORKDIR
RUN npm install -g npm@8.13.2

RUN npm install

# no need for /home/app/server.js because of WORKDIR
CMD npm start