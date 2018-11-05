# Angular-MongoDB-Websockets

A simple website using Angular.js with database using MongoDB. There is also a simple chat application.
This gives an idea about how to work with:
  * Single Page Application
  * Form handling
  * Sending and receiving data to/from MongoDB
  * API calls using angular
  * Simple typescripts 
  
Each service runs on a different server:
  * Frontend working on localhost:4000
  * API servers working on localhost:1234
  * WebSockets working on localhost:8999


To run this make sure you have **npm, node.js, express, angular, mongod, websocket, nodemon** installed.
Once you have everything installed follow these steps on command line:
  1. Start the front end server:
  ```
  C:\ProjectFolder npm start
  ```
  2. Start API servers:
  ```
  C:\ProjectFolder\server nodemon index.js
  ```
  3. Start MongoDB:
  ```
  mongod
  ```
  4. Start WebSockets Server:
  ```
  C:\ProjectFolder\src\dist\server node server.js
  ```
