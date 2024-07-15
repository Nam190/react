import React from 'react'

export default function LvnListTableName({renderLvnListTableName,onLvnDelete,onLvnEdit}){
        console.log("List:",renderLvnListTableName);
        // Hiển Thị dữ liệu
        const lvnElementTableName = renderLvnListTableName.map((lvnItem,lvnIndex)=>{
            return(
                <tr key={lvnIndex}>
                    <td>{lvnItem.lvnId}</td>
                    <td>{lvnItem.lvnTbName}</td>
                    <td>{lvnItem.lvnTbEmail}</td>
                    <td>{lvnItem.lvnTbPhone}</td>
                    <td>{(lvnItem.lvnTbStatus===true || lvnItem.lvnTbStatus==="true")?"Active":"Non-Active"}</td>
                    <td>
                        <button className='btn btn-success m-2'
                            onClick={()=>lvnHandelEdit(lvnItem)}
                        >lvn-edit</button>
                        <button className='btn btn-danger'
                            onClick={(ev)=>lvnHanldeDelete(lvnItem.lvnId)}
                        >lvn-delete</button>
                    </td>
                </tr>
            );
        })
        // sự kiện xóa
        const lvnHanldeDelete = (lvnId)=>{
            if(window.confirm('Bạn có muốn xóa dữ liệu có lvnId='+lvnId)){
            onLvnDelete(lvnId);
            }
        }
        //sửa
        const lvnHandelEdit=(lvnObjTableName)=>{
            onLvnEdit(lvnObjTableName)
        }
    return (
        <div>
            <h2>Danh Sách thông tin...</h2>
            <hr/>
            <table className='table talbe-bordered'>
                <thead>
                    <tr>
                        <th>lvnId</th>
                        <th>lvnTbName</th>
                        <th>lvnEmail</th>
                        <th>lvnTbPhone</th>
                        <th>lvnTbStatus</th>
                        <th>lvn: Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {lvnElementTableName}
                </tbody>
            </table>
        </div>
    )
}