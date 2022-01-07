import React, { useState, useContext, createContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import '../components/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import sideimage from '../img/todo3.gif';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LoadingButton from '@mui/lab/LoadingButton';
import axios from "axios";


const Login = () => {
    document.title = "To-Do List";
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [datas, setData] = useState(0);
    const inputUser = (e) => {
        e.preventDefault();
        setUser(e.target.value);
        console.log(user);
    }
    const inputEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
        console.log(email);
    }
    // let userData;
    const loginHandler = (e) => {
        setLoading(true);
        e.preventDefault();
        async function getUser() {
            try {
                const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
                // console.log(res.data);
                const result = res.data.filter(users => users.email === email && users.username === user);
                if (result.length == 1) {
                    console.log(result[0].id);
                    setData(result[0].id);
                    navigate("/todo", { state: { id: result[0].id } });
                }
                else {
                    window.alert("user not found");
                    window.location.reload(false);
                }
            }
            catch (err) {
                console.log(err);
            }


        }

        getUser();
        console.log(datas);
    }
    useEffect(() => {
        document.title = "To-Do List";
    })
    return (
        <>
            {/* <CircularProgress/> */}
            <div className="login">
                <div className="row justify-content-center align-item-center">

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row justify-content-lg-around justify-content-md-between">
                                <div className="col-md-4">
                                    <div className="heading text-start ">
                                        To-Do-List
                                    </div>
                                    <div className="subheading text-start">
                                        Make your own to-do list
                                    </div> <img src={sideimage} alt="Sign In" /></div>
                                <div className="col-lg-4 col-md-6 col-sm-6 form text-start px-lg-5 px-md-4 h-100 align-self-center">
                                    <form onSubmit={() => { loginHandler() }} >
                                        <div className="title">Sign In</div>
                                        <TextField id="username" label="Username" fullWidth className="mt-2 mb-2" InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle />
                                                </InputAdornment>
                                            ),
                                        }} variant="outlined"
                                            placeholder="abc12"
                                            value={user}
                                            onChange={inputUser}
                                            required
                                        />
                                        <TextField id="email" label="Email"  fullWidth className="my-3" InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AlternateEmailIcon />
                                                </InputAdornment>
                                            ),
                                        }} variant="outlined"
                                            placeholder="abc@mail.com"
                                            value={email}
                                            onChange={inputEmail}
                                            required
                                        />
                                        <input type="checkbox" id="remember" name=" " value="Remember" className="me-1" />
                                        <label>  Remember Me</label>
                                        <div>  <LoadingButton
                                            onClick={loginHandler}
                                            loading={loading}
                                            variant="contained"
                                            size="large"
                                            className="w-50 my-4"
                                        // type="submit"
                                        >
                                            Login
                                        </LoadingButton></div>
                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}


export default Login;


