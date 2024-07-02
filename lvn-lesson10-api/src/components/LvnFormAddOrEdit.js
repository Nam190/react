import axios from '../api/lvnApi'
import React, { useEffect, useState } from 'react'

export default function LvnFormAddOrEdit({onLvnClose, onLvnSubmitForm, renderUsers}) {

    console.log(renderUsers);
    const [lvnId, setLvnId] = useState(0);
    const [lvnUserName, setLvnUserName] = useState("");
    const [lvnPassword, setLvnPassword] = useState("");
    const [lvnEmail, setLvnEmail] = useState("");
    const [lvnPhone, setLvnPhone] = useState("");

    useEffect(()=>{
        setLvnId(renderUsers.id)
        setLvnUserName(renderUsers.UserName)
        setLvnPassword(renderUsers.Password)
        setLvnEmail(renderUsers.Email)
        setLvnPhone(renderUsers.Phone)
    },[renderUsers])


    const lvnHandleClose = ()=>{
        onLvnClose(false);
    }

    const lvnHandleSubmit= async (event)=>{
        event.preventDefault();
        console.log(lvnId,lvnUserName,lvnPassword,lvnEmail,lvnPhone);
        // post -> api
        let lvnObjUser = {
            UserName: lvnUserName,
            Password: lvnPassword,
            Email: lvnEmail,
            Phone: lvnPhone,
            id: lvnId
        }
        const lvnRes = await axios.post("lvnUsers",lvnObjUser);

        onLvnSubmitForm(false)

    }
  return (
    <div className=''>
      <form>
        <div className="input-group mb-3">
            <span className="input-group-text" id="id">Id</span>
            <input type="text" class="form-control" 
                name='id' value={lvnId} onChange={(ev)=>setLvnId(ev.target.value)}
                placeholder="id" aria-label="id" aria-describedby="id"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="UserName">UserName</span>
            <input type="text" class="form-control" 
                name='UserName' value={lvnUserName} onChange={(ev)=>setLvnUserName(ev.target.value)}
                placeholder="UserName" aria-label="UserName" aria-describedby="UserName"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="Password">Password</span>
            <input type="password" class="form-control" 
                name='Password' value={lvnPassword} onChange={(ev)=>setLvnPassword(ev.target.value)}
                placeholder="Password" aria-label="Password" aria-describedby="Password"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="Email">Email</span>
            <input type="email" class="form-control" 
                name='Email' value={lvnEmail} onChange={(ev)=>setLvnEmail(ev.target.value)}
                placeholder="Email" aria-label="Email" aria-describedby="Email"/>
        </div>
        
        <div className="input-group mb-3">
            <span className="input-group-text" id="Phone">Phone</span>
            <input type="number" class="form-control" 
                name='Phone' value={lvnPhone} onChange={(ev)=>setLvnPhone(ev.target.value)}
                placeholder="Phone" aria-label="Phone" aria-describedby="Phone"/>
        </div>
        <button className='btn btn-primary' name='btnLvnSave' onClick={(ev)=>lvnHandleSubmit(ev)}>Ghi lại</button>
        <button className='btn btn-danger' onClick={lvnHandleClose}>Đóng</button>
      </form>
    </div>
  )
}
