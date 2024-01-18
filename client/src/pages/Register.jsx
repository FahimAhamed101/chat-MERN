import { Button, Col, Container,Form,Nav,Navbar,Row,Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Register = () => {
    const {registerinfo,updateRegisterInfo} = useContext(AuthContext)
    return (
      <Form>
        <Row style={{
            height:"100vh",
            justifyContent:"center",
            paddingTop:"10%"
        }}>
            <Col xs={6}>
                <Stack gap={3}>
                    <h2>Register</h2>
                    <Form.Control type="text" placeholder="name" onChange={()=>updateRegisterInfo({...registerinfo,name:e.target.value})} />
                    <Form.Control type="email" placeholder="email" />
                    <Form.Control type="password" placeholder="password" />
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Stack>
            </Col>
        </Row>
      </Form>
    );  
  
    
  }
  
  export default Register;