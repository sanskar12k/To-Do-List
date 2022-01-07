import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ToDo from './components/Todo';
import Profile from './components/Profile';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route exact path  = "/" element = {<App/>}/>
          <Route path = "/todo" element = {<ToDo/>}/>
          <Route path = '/profile' element = { <Profile/> }/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
