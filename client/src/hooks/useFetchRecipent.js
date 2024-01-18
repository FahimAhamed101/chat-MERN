import { useCallback, useEffect } from "react";
import { createContext,useState } from "react";
export const ChatContext = createContext();

export const useFetchRecipent = ({chat,user})=>{
    const [recipentUser,setRecipentUser] = useState(null);
    const [isUserChatsLoadin,setUserChatsLoadin] = useState(false);
    const [Error,setError] = useState(null);
    
    const receipentId = chat?.members.find((id)=> id !==user?.id ) 
    useEffect(()=>{
       const getUser = async()=>{
        if(!receipentId) return null; 
            const response = await getRequest(`${baseurl}/users/find/${receipentId}`);
        if (response.error){
            return setError(response)
        }
        setRecipentUser(response)
        }
        getUser()
   

    },[])
    
    return (
        <ChatContext.Provider value={{userChats,isUserChatsLoadin,userChatsError}}>
{children}
        </ChatContext.Provider>
    )
}
