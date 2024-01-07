import { Server } from "socket.io";

const io = new Server ({cors:""})
const onlineUsers=[]
io.on("connection",(socket)=>{
    console.log("new connection",socket.id);
    socket.on("AddNewUser",(userId)=>{
        !onlineUsers.some((user)=> user.userId === userId) &&
        onlineUsers.push({
            userId,
            socketId:socket.id,
        });
        console.log("onlineusers",onlineUsers);
        io.emit("getOnlineusers",onlineUsers);
    });
    socket.on("disconnect",()=>{
        onlineUsers = onlineUsers.filter((user)=>user.socketId !==socket.id);
        io.emit("getOnelineuers",onlineUsers);
    });
})

io.listen(3000);