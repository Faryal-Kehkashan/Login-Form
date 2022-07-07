import './Home.css';
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Navbar from "./Assets/Components/Navbar.js"


function Home() {

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const changename = (e) => {
    setName(e.target.name);
  }

  const changepass = (e) => {
    setPass(e.target.password);
  }

  const handlesubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">

      <Navbar/>
      
      <form onSubmit = {handlesubmit} id="login-form">

        <h3>Log In</h3>

        <label>Username </label>
        <input type="text" name = {name} onChange = {changename} placeholder = "Username" required></input>

        <label>Password </label>
        <input type="password" name = {pass} onChange = {changepass} placeholder = "Password" required></input>
        
        <Link to = "/Welcome" id = "btn" name = {name}>
           <input type = "submit" id = "in">
           </input>
       </Link>

        <Link to = "/User" id = "member">Already Have an Account</Link>
      </form>
    </div>
  );
}

export default Home;
