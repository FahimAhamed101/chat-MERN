import { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
   const {userChats,isUserChatsLoading,UserChatsError} = useState(ChatContext)
   useContext(ChatContext)
    return (
       <Container>
         {userChats?.length < 1 ?null : (
            <State className="align-items-start" direction="horizontal" gap={4} >
               <Stack className="message-box" flex-gow-8 pe-3 gap={3}>
                  {isUserChatsLoading && <p>Loading chats....</p>}
                  {userChats.map((chat,index)=>{
                     return(
                        <div key={index}>
                           <UserChat chat={chat} user={user} />
                        </div>
                     )
                  })}

               </Stack>
            </State>
         )}
       </Container>
    );  
  
    
  }
  
  export default Chat;