import { useCallback, useEffect } from "react";
import { createContext,useState } from "react";
export const ChatContext = createContext();

export const ChatContextProvider = ({children,user})=>{
    const [userChats,setUserChats] = useState(null);
    const [isUserChatsLoadin,setUserChatsLoadin] = useState(false);
    const [userChatsError,setUserChatsError] = useState(null);
    useEffect(()=>{
        const getUsers = async()=>{
        
             const response = await getRequest(`${baseurl}/users`)
         if (response.error){
            console.log("Error fetching users",response)
         } 
         const pchats = response.filter((e)=>{
            let isChatCreated = false;
            if (user._id==useCallback._id) return false;
        if (userChats){
            isChatCreated = userChats?.some((chat)={
                return chat.members[0]===u._id|| chat.members[1]===u._id;
            })

        } 
        return isChatCreated;
        
        });

         setUserChats(response)
         }
         getUserChats()
    
 
     },[user])
    
    
    
    useEffect(()=>{
       const getUserChats = async()=>{
        if(user?._id){
            const response = await getRequest(`${baseurl}/chats/${user?._id}`)
        if (response.error){
            return setUserChatsError(response)
        } 
        setUserChats(response)
        }
        getUserChats()
    };

    },[user])
    
    return (
        <ChatContext.Provider value={{userChats,isUserChatsLoadin,userChatsError}}>
{children}
        </ChatContext.Provider>
    )
}
