
import './App.css';
import LvnListUsers from './components/LvnListUsers';
import axios from './api/lvnApi'
import { useEffect, useState } from 'react';
function LvnApp() {

  const [lvnListUsers,setLvnListUsers] = useState([]);
  // đọc dữ liệu từ api
  const lvnGetAllUsers = async ()=>{
    const lvnResponse = await axios.get("lvnUsers");
    console.log("Api Data:",lvnResponse.data);
    setLvnListUsers(lvnResponse.data)
  }
 
  useEffect{()=>{
    lvnGetAllUsers();
    console.log("State Data:",lvnListUsers);
  }}
  return (
    <div className="container boder my-3">
    <h1> Làm việc với MockApi</h1>
    <hr/>
    <LvnListUsers renderLvnListUsers={lvnListUsers}/>
    </div>
  );
}

export default LvnApp;
