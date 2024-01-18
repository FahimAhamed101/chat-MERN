import {Stack} from "react-bootstrap"
import {useFetchRecipientUser} from ""

const  UserChat = ({chat,user}) =>{
    const {recipentuser} = useFetchRecipientUser(chat,user);
    return(
        <Stack className="user-card align-items-center p-2 justify-content-between" direction="horizontal" gap={3} >
            <div className="d-flex">
                <div className="me-2">
                A
                </div>
                <div className="text-content">
                    <div className="name">{recipentuser?.name}</div>
                    <div className="text">Text Message</div>
                </div>

            </div>
            <div className="d-flex flex-column align-items-end">
                <div className="date">12/12/2024</div>
                <div className="this-user-notifications">12/12/2024</div>
                <div className="user-Online">12/12/2024</div>
            </div>
        </Stack>
    )
}