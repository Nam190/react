import React from 'react';
import axios from '../api/lvnApi';

export default function LvnSinhVienList({ renderlvnSinhVienList, onlvnDelete }) {
    console.log("lvnSinhVienList:", renderlvnSinhVienList);

    const lvnHandleDelete = async (param) => {
        if (window.confirm("Bạn có muốn xóa không?")) {
            try {
                const response = await axios.delete("lvnSinhVien/" + param.MaSV);
                console.log("Delete response:", response);
                onlvnDelete();
            } catch (error) {
                console.error("Error deleting student:", error);
            }
        }
    };

    // Render the list of students
    let lvnElementStudent = renderlvnSinhVienList.map((LVNSinhVien, index) => (
        <tr key={index}>
            <td>{LVNSinhVien.lvnMaSV}</td>
            <td>{LVNSinhVien.lvnHoSV}</td>
            <td>{LVNSinhVien.lvnTenSV}</td>
            <td>{LVNSinhVien.lvnPhai ? 'Nam' : 'Nữ'}</td>
            <td>{LVNSinhVien.lvnNgaySinh}</td>
            <td>{LVNSinhVien.lvnNoiSinh}</td>
            <td>{LVNSinhVien.lvnMaKH}</td>
            <td>{LVNSinhVien.lvnHocBong}</td>
            <td>{LVNSinhVien.lvnDiemTrungBinh}</td>
            <td>
                <button className='btn btn-success'>Edit</button>
                <button className='btn btn-danger' onClick={() => lvnHandleDelete(LVNSinhVien)}>Remove</button>
            </td>
        </tr>
    ));

    return (
        <div className='row'>
            <div className='col-md-12'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
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
                        {lvnElementStudent}
                    </tbody>
                </table>
            </div>
        </div>
    );
}