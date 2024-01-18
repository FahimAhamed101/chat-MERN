import { Alert, Button, Col, Container,Form,Nav,Navbar,Row,Stack } from "react-bootstrap";
import { Link } from "react-router-dom";



const Login = () => {
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
                    
                    <Form.Control type="email" placeholder="email" onChange={(e)=> updateLoginInfo({...loginInfo,email: e.target.value}) />
                    <Form.Control type="password" placeholder="password" onChange={(e)=> updateLoginInfo({...loginInfo,password: e.target.value})  />
                    <Button variant="primary" type="submit">
                       Login
                    </Button>
                    {loginError?.error && (
                        <Alert>
                            <p>{loginError?.message}</p>
                        </Alert>
                    )}
                </Stack>
            </Col>
        </Row>
      </Form>
    );  
  
    
  }
  
  export default Login;