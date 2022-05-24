import { useState } from "react"
import { Container, Form } from "react-bootstrap"
import "./HomePage.css";
import userService from "../../utils/userService";


//renders a search bar where viewers and users can search music using spotify without having spotify API interfere with jwt authentication/authorization
export default function HomePage({ props }) {
    const clientCred = userService(props)
    const [search, setSearch] = useState("")
    return (
    <Container className="d-flex flex-column py-2" style={{height: "100vh"}}>
        <Form.Control
         type="search" 
         placeholder="Search Songs/Artists" 
         value={search} 
         onChange={e => setSearch(e.target.value)}
         />
         <div 
         className="flex-grow-1 my-2" 
         style={{ overFlowY: "auto" }}>
             Songs
             </div>
    </Container>
  )
}
