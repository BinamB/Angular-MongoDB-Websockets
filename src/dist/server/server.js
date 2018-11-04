"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
///Get User Info
class getUserName {
    constructor(user) {
        this.user = user;
        this.userName = "";
    }
    ngOnInit() {
        this.user.getData().subscribe(data => {
            if (data.status) {
                this.userName = data.userName;
                console.log(this.userName);
            }
            else {
                console.log("non data");
            }
        });
    }
}
exports.getUserName = getUserName;
console.log(this.userName);
console.log(getUserName);
console.log(getUserName.userName);
const app = express();
//initialize a simple http server
const server = http.createServer(app);
//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });
function createMessage(content, isBroadcast = false, sender = '${message.sender}') {
    return JSON.stringify(new Message(content, isBroadcast, sender));
}
class Message {
    constructor(content, isBroadcast = true, sender) {
        this.content = content;
        this.isBroadcast = isBroadcast;
        this.sender = sender;
    }
}
exports.Message = Message;
wss.on('connection', (ws) => {
    const extWs = ws;
    extWs.isAlive = true;
    ws.on('pong', () => {
        extWs.isAlive = true;
    });
    //connection is up, let's add a simple simple event
    ws.on('message', (msg) => {
        const message = JSON.parse(msg);
        setTimeout(() => {
            if (message.isBroadcast) {
                //send back the message to the other clients
                wss.clients
                    .forEach(client => {
                    if (client != ws) {
                        client.send(createMessage(message.content, true, message.sender));
                    }
                });
            }
            // ws.send(createMessage(`${message.sender} > ${message.content}`, message.isBroadcast));
        }, 1000);
    });
    //send immediatly a feedback to the incoming connection    
    // ws.send(createMessage('Hi there, I am a WebSocket server'));
    ws.on('error', (err) => {
        console.warn(`Client disconnected - reason: ${err}`);
    });
});
setInterval(() => {
    wss.clients.forEach((ws) => {
        const extWs = ws;
        if (!extWs.isAlive)
            return ws.terminate();
        extWs.isAlive = false;
        ws.ping(null, undefined);
    });
}, 10000);
//start our server
server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});
//# sourceMappingURL=server.js.map