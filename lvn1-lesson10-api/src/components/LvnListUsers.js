import React from 'react'
import axios from '../api/lvnApi'
export default function LvnListUsers({renderLvnListUsers, onLvnDelete}) {
    console.log("LvnListUsers:",renderLvnListUsers);
    // hiener thi đữ liệu
    let lvnElementUser = renderLvnListUsers.map((lvnUser,index)=>{
        return(
                <tr key={index}>
                    <td>{lvnUser.id}</td>
                    <td>{lvnUser.UserName}</td>
                    <td>{lvnUser.Password}</td>
                    <td>{lvnUser.Email}</td>
                    <td>{lvnUser.Phone}</td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>lvnHandleDelete(lvnUser)}> Delete </button>
                    </td>
                </tr>
        )
    })
 
    const lvnHandleDelete =  async (param)=>{
        if(window.confirm('Bạn có muốn xóa thật không?')){
            const lvnRes = await axios.delete("lvnUsers/"+param.id);
        }
        onLvnDelete();
    }
  return (
    <div className='row'>
        <div className='col-md-12'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                {lvnElementUser}
                </tbody>

            </table>
        </div>
    </div>
  )
}
