import {Routes,Router,Navigate, Route} from "react-router-dom"
import Chat from "./pages/Chat";

import Navbar from "./components/Navbar";
import {Container} from "react-bootstrap";
function App() {
  return (
<>
  <Navbar/>
  <Container>
    <Routes>
    <Route path="/" element={<Chat/>} />
    <Route path="/register" element={<Register/>} />
     <Route path="/login" element={<Login/>} />
  </Routes>
  </Container>
  </>
 
  );
}

export default App;
