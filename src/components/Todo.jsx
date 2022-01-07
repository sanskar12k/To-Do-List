import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Todo.css'
import Nav from './Navbar';
import SideImage from '../img/todo2.jpg';
import Load from '../Loader';
import { CircularProgress } from "@mui/material";
const Todo = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location.state.id);
    // const user  = useContext(UserContext);
    const [dataToDo, setData] = useState();
    const [userToDo, setuserToDo] = useState();
    const [userLogin, setLogin] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [expanded, setExpanded] = React.useState(false);
    const [total, setTotal] = useState(0);
    const [remain, setRemain] = useState(0);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
    async function getData() {
        // if(location.state.id !== null){

        try {
            const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${location.state.id}`);
            const todos = await axios.get(`https://jsonplaceholder.typicode.com/users/${location.state.id}/todos`);
            //  await axios.get(`https://jsonplaceholder.typicode.com/users/${location.state.id}/todos`)
            // .then((err,res) => {setuserToDo(res.data);
            // console.log(res.data)
            // setTotal(dataToDo.data.length)
            //     const remaining = userToDo.filter(todos => todos.completed === false );
            //     setRemain(remaining.length);
            //     document.title = dataToDo.name;
            // })
            // .catch((err) =>{
            //     console.log(err)
            // })
        
            // console.log(todos.data)
            setData(result.data);
            setuserToDo(todos.data);
            setLoading(false);
            setLogin(true);
            setTotal(todos.data.length);
     
        }
        catch(err){
            console.log("data dosen't exist");
        }
        // catch (err) {
        //     console.log(err);
        // }
        // }
    }
    async function getNumbers(){
        const remaining = userToDo.filter(todos => todos.completed === false );
        setRemain(remaining.length);
        document.title = dataToDo.name;
        console.log(remaining.length); 
    }

    useEffect(() => {
        getData();
        
    }, []);
    useEffect(()=>{
        getNumbers();
    });
    // useEffect(() => {
    //     getNumbers();
    // }, []);
    return (

        <>

            {!userLogin && <div className='notLogin'> <div className="item"><CircularProgress /> </div> </div>}
            {isLoading && userLogin && <div>Loading...</div>}
            {userLogin && <div className='todos'>
                {/* {dataToDo.name} */}
                
                <Nav name={dataToDo.name} idname = {dataToDo.id} />

               
           

                <div className="containers">
                    {/* {total}
                    {remain} */}
                    <div className="row justify-content-between">
                        
                        <div className="col-lg-4 col-sm-5 px-lg-1 ps-md-4 ">

                            <div className='row justify-content-center' >
                                {/* <div className='col-md-12'> */}
                                <img src={SideImage} alt="Side Image" />
                                {/* </div> */}
                            </div>
                            <div className="row mt-4 justify-content-center">
                                {/* <div className="col-md-12"> */}
                                <div clasName="card col-sm-12 col-8" >
                                    <ul className="list-group list-group-flush w-100">
                                        <li className="list-group-item w-sm-100  m-auto">
                                            <div className="row justify-content-between h6 fw-bold">
                                                <div className="col-5 ">Total Tasks </div>
                                                <div className="col-4">{total}</div>
                                            </div>
                                        </li>
                                        <li className="list-group-item w-sm-100  m-auto">
                                            <div className="row justify-content-between h6 fw-bold">
                                                <div className="col-4">Completed </div>
                                                <div className="col-4">{total - remain}</div>
                                            </div>
                                        </li>
                                        <li className="list-group-item w-sm-100  m-auto">
                                            <div className="row justify-content-between h6 fw-bold">
                                                <div className="col-4">Remaining</div>
                                                <div className="col-4">{remain}</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>   
                            </div>
                        </div>
                        <div className="col-sm-7 tableR">


                            <div className="todo">
                                {userToDo.map((todos) => {
                                    return (
                                        <div className='content' key={todos.id} >
                                            <Accordion expanded={expanded === `${todos.id}`} onChange={handleChange(`${todos.id}`)}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1bh-content"
                                                    id="panel1bh-header"
                                                >
                                                    <Typography sx={{ width: { lg:'8%', md:'7%'}, flexShrink: 0 }}>
                                                        {/* {todos.completed && <CheckBoxIcon/>}
                                            {!todos.completed && <CheckBoxOutlineBlankIcon/>} */}
                                                        {todos.completed && <Checkbox {...label} defaultChecked color="success" />}
                                                        {!todos.completed && <Checkbox {...label} color="success" />}
                                                    </Typography>
                                                    <Typography sx={{ color: 'text.secondary' }} className='me-auto text-start'> {todos.title}</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                                        Aliquam eget maximus est, id dignissim quam.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                        </div>
                                    )

                                })}

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            }


        </>
    )

}

export default Todo;


// import * as React from 'react';

// import Button from '@mui/material/Button';





// export default function OutlinedCard() {
//     return (

//   );
// }
