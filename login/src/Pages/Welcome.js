import React from 'react';
import { Link } from "react-router-dom";
import "./Welcome.css";

export default function Welcome(props) {
  return (
    <div className='bg'>
        <div className='container'>
        <h2>
            Welcome  
            <span>
                 {props.name}
            </span>!
            You are logged In.
        </h2>
        <Link to = "/" id = "link"> Go Back</Link>
        </div>
    </div>
  )
}
