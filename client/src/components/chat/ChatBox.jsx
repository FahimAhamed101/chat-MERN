import { useContext } from "react"
import { Stack } from "react-bootstrap"
import { ChatContext } from "../../context/ChatContext"
import { useFetchRecipent } from "../../hooks/useFetchRecipent"

const ChatBox = () =>{
    const {user} = userContext(AuthContext)
    const {currentChat,messages,isMessagesLoading} = useContext(ChatContext)
    const {recepentuser} = useFetchRecipentUser(currentChat,user);
    if (!recepentuser)
    return (<p style={{textAlign:"center",width:"100%"}}>
        No converstaion found
    </p>)
    if (!isMessagesLoading)
    return (<p style={{textAlign:"center",width:"100%"}}>
       loading chat...
    </p>)
    return (
        <Stack gap={4} className="chat box">
            <div className="chat-header">
                <strong>{recepentuser?.name}</strong>

            </div>
        <Stack gap={3} className="messages">
            {messages && messages.map((message,index)=>
            <Stack key={index}>
                <span>{message.text}</span>
                <span></span>
            </Stack>
            )}

        </Stack>
        </Stack>
    )
}