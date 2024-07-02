
import './App.css';
import LvnListUsers from './components/LvnListUsers';
import axios from './api/lvnApi'
import { useEffect, useState } from 'react';
import LvnFormAddOrEdit from './components/LvnFormAddOrEdit';
function LvnApp() {
  
  const [lvnListUsers,setLvnListUsers] = useState([]);

  // đọc dữ liệu từ api
  const lvnGetAllUsers = async  ()=>{
    const lvnResponse = await axios.get("lvnUsers");
    console.log("Api Data:",lvnResponse.data);
    setLvnListUsers(lvnResponse.data)
  }

  
  useEffect(()=>{
    lvnGetAllUsers();
    console.log("State Data:",lvnListUsers);
  },[])

  const [lvnAddOrEdit, setLvnAddOrEdit] = useState(false);
  const lvnInitUser = {
      UserName: "Lưu Viết Nam",
      Password: "10/10/2002",
      Email: "luunam990@gmail.com",
      Phone: "123456789",
      id: "2010900024"
  }
  const [lvnUser, setLvnUser] = useState(lvnInitUser);

  // Hàm xử lý nút thêm mới
  const lvnHandleAddNew = ()=>{
    setLvnAddOrEdit(true);
  }
  const lvnHandleClose=(param)=>{
    setLvnAddOrEdit(param);
  }
  const lvnHandleSubmit =(param)=>{
    lvnGetAllUsers();
    setLvnAddOrEdit(param);
  }
  const lvnHandleDelete=()=>{
    lvnGetAllUsers();
  }
  let lvnElementForm = lvnAddOrEdit===true?
      <LvnFormAddOrEdit renderUsers={lvnUser} 
                        onLvnClose={lvnHandleClose}
                        onLvnSubmitForm={lvnHandleSubmit}/>:"";
  return (
    <div className="container border my-3">
        <h1>Làm việc với MockApi</h1>
        <hr/>
        <LvnListUsers  renderLvnListUsers={lvnListUsers} onLvnDelete={lvnHandleDelete}/>
        <button className='btn btn-primary' name='btnLvnThemMoi' onClick={lvnHandleAddNew}>Thêm mới</button>
        <hr/>
        {lvnElementForm}
    </div>
  );
}

export default LvnApp;
