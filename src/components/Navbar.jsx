import React from 'react';
import {Navbar, Container, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { useNavigate, Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeIcon from '@mui/icons-material/Home';
const Nav = (props) => {
    const navigate = useNavigate();
    // console.log(props.idname);
    const toProfile = () =>{
        navigate("/profile", {state:{id:props.idname}});
    }
    const todo = () =>{
      navigate("/todo", {state:{id:props.idname}});
  }
    return (
        <Navbar expand="lg" variant="light" className='bg-white box-shadow' >
        <Container>
         { props.page === "profile" &&  <Navbar.Brand   onClick={()=>{todo()}}>  <HomeIcon/> </Navbar.Brand>}
         { !(props.page === "profile") &&  <Navbar.Brand   onClick={()=>{toProfile()}}>  <AccountCircleOutlinedIcon/> {props.name} </Navbar.Brand>}
          {/* <Button variant="outline-info" className="ms-auto" onClick={()=>{toProfile()}} >Logout</Button> */}
          {/* <Navbar.Brand> <Link to="/profile"> <AccountCircleOutlinedIcon/> {props.name} </Link></Navbar.Brand> */}
          <Button variant="outline-info" className="ms-auto" onClick={()=>{ navigate("/")}} >Logout</Button>
        </Container>
      </Navbar>
    )
}


export default Nav;

// onClick={()=>{navigate("/", {state:{id:props.id}}) }}

{/* <Link to={{pathname : "/profile", state : {id:props.id} }}  >  */}