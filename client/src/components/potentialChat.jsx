import {Stack} from "react-bootstrap"
import {useFetchRecipientUser} from ""

const  PotentialChats = ({chat,user}) =>{
    const {user} = useFetchRecipientUser(chat,user);
    return(
       <>
       <div className="all-users">
        {PotentialChats && 
        PotentialChats.map((i,index)=>{
            return (
                <div onClick={()=>createChat(user._id,i_id)} className="single-user" key={index} >
                    {i.name}
                    <span className="user-online"></span>
                </div>
            )
        })
        
        }

       </div>
       </>
    )

}