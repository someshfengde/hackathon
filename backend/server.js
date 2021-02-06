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
const newMessagePush =(message,socket) =>{
    socket.to(roomName).emit("newMsgUpdate",message);
}; //pushing new message to ui 
io.on("connection", (socket) =>{ //everytime on connection we do this
    console.log("user is connected to the server");
    socket.on("join", () =>{
        logger.info("User is joined ");
    });
    socket.on("submit",(obj) =>{
        logger.warn("this triggered");
        logger.info(obj.stringify);
    })
    socket.on('disconnect', () =>{
        // const presentUser = userss.find(user => user.id==socket.id);
        logger.warn("user left");
    });
});

http.listen(PORT,() =>{
    console.log(`listning on port ${PORT}`)
}); // the server is on the port from which we can access it 
