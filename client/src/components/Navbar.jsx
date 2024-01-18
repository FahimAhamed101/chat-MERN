import { Container,Nav,Navbar,Stack } from "react-bootstrap";
import { Link } from "react-router-dom";



const Navbar = () => {
    return (
       <Navbar bg="dark" className="mb-4" style={{height:"3.75rem"}}>
        <Container>
            <h2>
                <Link to="/" className="link-light text-decoration-none">Chatapp</Link>
            </h2>
            <span className="text-warning">Logged in as Fahim</span>
            <Nav>
                <Stack>
                    
                </Stack>
            </Nav>
        </Container>

       </Navbar>
    );  
  
    
  }
  
  export default Chat;