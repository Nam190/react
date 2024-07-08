import React from 'react'
import axios from '../api/lvnApi'
export default function renderLvnListSinhVien({renderLvnListSinhVien, onLvnDelete}) {
    console.log("LvnListSinhVien:",renderLvnListSinhVien);
    // hiển thi đữ liệu
    let lvnElementSinhVien = renderLvnListSinhVien.map((lvnSinhVien,index)=>{
        return(
                <tr key={index}>
                    <td>{lvnSinhVien.id}</td>
                    <td>{lvnSinhVien.MaSV}</td>
                    <td>{lvnSinhVien.HoSV}</td>
                    <td>{lvnSinhVien.TenSV}</td>
                    <td>{lvnSinhVien.Phai}</td>
                    <td>{lvnSinhVien.NgaySinh}</td>
                    <td>{lvnSinhVien.NoiSinh}</td>
                    <td>{lvnSinhVien.MaKH}</td>
                    <td>{lvnSinhVien.HocBong}</td>
                    <td>{lvnSinhVien.DiemTrungBinh}</td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>lvnHandleDelete(lvnSinhVien)}> Delete </button>
                    </td>
                </tr>
        )
    })
 
    const lvnHandleDelete =  async (param)=>{
        if(window.confirm('Bạn có muốn xóa thật không?')){
            const lvnRes = await axios.delete("lvnSinhVien/"+param.id);
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
                        <th>MaSV</th>
                        <th>HoSV</th>
                        <th>TenSV</th>
                        <th>Phai</th>
                        <th>NgaySinh</th>
                        <th>NoiSinh</th>
                        <th>MaKH</th>
                        <th>HocBong</th>
                        <th>DiemTrungBinh</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                {lvnElementSinhVien}
                </tbody>

            </table>
        </div>
    </div>
  )
}
