import React from 'react';
import "./Admin.css";
import Navbar from "./Assets/Components/Navbar.js"

export default function Admin() {

  function handlesubmit()
  {
    var name= document.myform.name.value;
    var password= document.myform.password.value;
    var date= document.myform.date.value;
    var regNo= document.myform.regNo.value;

    var tble_row = document.createElement('tr');
    var td1 = tble_row.appendChild(document.createElement('td'));
    td1.innerHTML = name;

    var td2 = tble_row.appendChild(document.createElement('td'));
    td2.innerHTML = password;

    var td3 = tble_row.appendChild(document.createElement('td'));
    td3.innerHTML = regNo;

    var td4 = tble_row.appendChild(document.createElement('td'));
    td4.innerHTML = date;

    document.getElementById("tbl").appendChild(tble_row);
  }

  return (
    <div className='info-div'>

      <Navbar/>

      <div className='form-info'>
      <form onSubmit={handlesubmit} id = "admin-form" name='myform'>
        <h1>
          User Information
        </h1>
        <div>
          <label>User Registered :</label>
          <input name='name' placeholder='Name' type = "text" style={{width: "54%", marginLeft: "20px"}}></input>
        </div>

        <div>
          <label>User Password :</label>
          <input name='password' placeholder='Passcode' type = "text" style={{width: "56%", marginLeft: "21.5px"}}></input>
        </div>

        <div>
          <label>Registeration no :</label>
          <input name='regNo' placeholder='Registration no' type = "number" style={{width: "55%", marginLeft: "10"}}></input>
        </div>

        <div>
          <label>Registeration Date :</label>
          <input name='date' placeholder='Date' type = "date" style={{width: "40%", marginLeft: "5px"}}></input>
        </div>

        <div className='btns'>
          <button type='reset'>clear All</button>
          <button type='submit'>Add</button>
        </div>

      </form>

      <div className='table-div' id='tbl'>
        <h1>
          Registered Users
        </h1>

        <table border = "1">
        <tr>
          <th>Username</th>
          <th>Password</th>
          <th>Reg-No</th>
          <th>Reg Date</th>
        </tr>

        </table>
      </div>
      </div>
    </div>
  )
}
