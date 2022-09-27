# react-app-mt

> Multi-Tenant app with React

## Build Setup

``` bash
# install dependencies for Node server
npm install

# run Node server
node server.js

# in a new terminal -> access client app
cd client/

# install dependencies for React
npm install

# run react app for client 1
PORT=3001 REACT_APP_CLIENT_ID=1 npm start

# in a new terminal -> access client app
cd client/

# run react app for client 2
PORT=3002 REACT_APP_CLIENT_ID=2 npm start
```
