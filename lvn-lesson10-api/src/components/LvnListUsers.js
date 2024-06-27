 import React from "react";

 export default function LvnListUsers({renderLvnListUsers}){
    console.log("LvnListUsers:",renderLvnListUsers);
    // hiển thị dữ liệu
    let lvnElementUser = renderLvnListUsers.iterable.map((lvnUser,index) => {
        return(
            <>
            <tr>
            <td>{lvnUser.id}</td>
            <td>{lvnUser.UserName}</td>
            <td>{lvnUser.Password}</td>
            <td>{lvnUser.Email}</td>
            <td>{lvnUser.Phone}</td>
        </tr>
            </>
        )   
    })
    return(
        <div className="row">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UsesrName</th>
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
    )
 }