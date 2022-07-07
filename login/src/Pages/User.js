import React from 'react';
import { Link } from "react-router-dom";
import "./Welcome.css";

export default function User(props) {
  return (
    <div className='bg'>
        <div className='container'>
        <h2>
            You are a proud member.
        </h2>
        <Link to = "/" id = "link"> Go Back</Link>
        </div>
    </div>
  )
}
