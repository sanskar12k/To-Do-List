import React, { useEffect, useState } from 'react';
import './profile.css';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import profile from '../img/profile5.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Nav from './Navbar';
import { CircularProgress } from "@mui/material";
const Profile = (props) => {
    const location = useLocation();
    const [userLogin, setLogin] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState();
    console.log(location.state.id);
    async function getUser() {
        try {
            const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${location.state.id}`);
            setUser(result.data);
            console.log(user);
            setLogin(true);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getUser();
    }, [])
    return (
        <>
    
        { !userLogin && <div className='notLogin'> <div className="item"><CircularProgress /> </div> </div>}
        {userLogin && 
        <div>
            <Nav name={user.name} idname = {user.id} page="profile"/>
                <div className="row justify-content-center profilePage ">
                {/* <div className="col-md-1"></div> */}
                    <div className="col-lg-5 col-md-10 col-sm-10 mt-md-0 mt-sm-2 box">
                        <div className="row justify-content-md-between ">
                            <div className="col-sm-5 text-center">
                                <img src={profile} alt="Profile Photo" />
                                <hr />
                                <div className="data  ps-md-4 text-start">
                                <h5 className='fw-bolder h3' >{user.name}</h5>
                                <h6 className='pt-md-2'>Username</h6>
                                <p>{user.username}</p>
                                <h6>Email</h6>
                                <p>{user.email}</p> 
                                </div>
                            </div>
                            
                            <div className="col-sm-6 pt-md-5 pt-sm-3 data right align-self-stretch">
                            <h6>Contact</h6>
                                <p>{user.phone}</p>
                                <h6>Website</h6>
                                <p>{user.website}</p>
                                <h6>Address</h6>
                                <p>{user.address.street}, {user.address.suite}, {user.address.city}</p>
                                <h6>Company</h6>
                                <p>{user.company.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>}
            {/* </div> */}
        </>

    )
}

export default Profile;

