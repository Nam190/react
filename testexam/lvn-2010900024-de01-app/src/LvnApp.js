import React, { useEffect, useState } from 'react'
import LvnListTableName from './lvn_components/LvnListTableName';
import axios from './lvn_apis/lvn-2010900024'
import LvnFormTableName from './lvn_components/LvnFormTableName';

 export default function LvnApp() {
  //Đọc dữ liệu từ api
  const [lvnListTableName,setLvnListTableName] = useState([])
  const lvnGetTableName = async ()=>{
    let lvnResp = await axios.get("lvnTableName");
    console.log("App list:",lvnResp.data);
    setLvnListTableName(lvnResp.data);
  }

  useEffect(()=>{
    lvnGetTableName();
  },[])


// hàm xóa
const lvnHandleDelete= async (lvnId)=>{
    let lvnRes = await axios.delete("lvnTableName/"+lvnId);
    lvnGetTableName();
}

const lvnObjTableName = {
  
    "lvnTbName": "Lưu Viết Nam",
    "lvnTbEmail": "luunam990@gmail.com",
    "lvnTbPhone": "0384322743",
    "lvnTbStatus": true,
    "lvnId": "2010900024"
  
};
const [lvnTableName,setLvnTableName] = useState(lvnObjTableName);

// const lvnHandelAdd = ()=>{
//  lvnGetTableName();
// }
const lvnHandelEdit = ()=>{
  lvnGetTableName();
}

const lvnHandleEdit = (lvnObjTableName)=>{
  setLvnTableName(lvnObjTableName)
}
  return (
    <div className="container border my-3">
      <h1>Bài đánh giá hết học phần - Lưu Viết Nam: 2010900024</h1>
      <hr/>
      <LvnListTableName renderListTableName ={lvnListTableName} onLvnDelete={lvnHandleDelete} onLvnEdit={lvnHandleEdit}/>
      <hr/>
      <LvnFormTableName renderLvnTableName={lvnTableName} onLvnEdit={lvnHandelEdit}/>
    </div>
  );
}
