import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import ToDo from './components/Todo';
import Load from './Loader';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div className="App">
     {/* <Loader
        type="Puff"
        color="#000"
        height={100}
        width={100}
        timeout={3000} //3 secs
      /> */}
      {/* <Load/> */}
    <Login></Login>

      {/* <Router>
        <Routes>
          <Route exact path="/" component = {Login}/>

          <Route path="/todo" component = {ToDo}/>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
