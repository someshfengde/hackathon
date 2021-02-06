//require express for socketio 
const app = require("express")();
const http = require("http").createServer(app); //creating express server of http type 
const { json } = require("body-parser");
var log4js = require("log4js"); // for telling npm that it's a requirement
var logger = log4js.getLogger("Server");// for debugging something into the command prompt
logger.level = "debug"; //the level of logger to be diplayed in the command prompt 

const io = require('socket.io')(http,{
    cors: { 
        origin : "http://localhost:3000",  //origin is where we are listening from
    }
});
var userss=[];
const PORT = 3001; // the port which we are going to use on where are we listening 
/* ***************************************************************************** */
const newMessagePush =(message,roomName,socket) =>{
    socket.to(roomName).emit("newMsgUpdate",message);
}; //pushing new message to ui 
io.on("connection", (socket) =>{ //everytime on connection we do this
    console.log("user is connected to the server");
    
    socket.on("join",(roomName,username) =>{ //after joining the room 
        userss.push({
            id : socket.id,
            username : username,
            roomName : roomName,
        });
        logger.info("client joined the room");
        logger.info("Room Name: " + roomName);
        socket.join(roomName);
        socket.to(roomName).on("newMessage", (message) =>{
            logger.info("new message from client");
            logger.info("client socket id:" + socket.id + " user name is : " + message.user);
            logger.info("Msg: " + message.message);
            newMessagePush(message,roomName,socket);
        });
        socket.to(roomName).on("ImTyping", (username) => {
            logger.info(username + "is typing");
            socket.to(roomName).emit("Typing",username);
        });
        socket.to(roomName).on("stop", () =>{
            logger.info("stopped-typing");
            socket.to(roomName).emit("notTyping");
        });
        socket.to(roomName).on("newuser",(username) =>{
        socket.to(roomName).username = username;
        });
         
      });
    socket.on('disconnect', () =>{
        const presentUser = userss.find(user => user.id==socket.id);
        logger.warn(JSON.stringify(presentUser) + "is left the timer " + presentUser.username);
    });
});

http.listen(PORT,() =>{
    console.log(`listning on port ${PORT}`)
}); // the server is on the port from which we can access it 
