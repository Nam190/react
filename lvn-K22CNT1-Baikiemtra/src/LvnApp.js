import React, { useState, useEffect } from 'react';
import axios from './api/lvnApi';
import LvnFormAddOrEdit from './components/lvnFormAddOrEdit.';
import LvnListSinhVien from './components/lvnListSinhVien.';
const LvnApp = () => {
  const [lvnListSinhVien, setLvnListSinhVien] = useState([]);

  // Hàm để lấy dữ liệu từ API
  const lvnGetAllStudent = async () => {
    try {
      const response = await axios.get("lvnSinhVien");
      console.log("API Data:", response.data);
      setLvnListSinhVien(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    lvnGetAllStudent();
    console.log("State Data:", lvnListSinhVien);
  }, []); // Dùng mảng rỗng để effect chỉ chạy một lần khi component mount

  const [LvnFormAddOrEdit, setLvnFormAddOrEdit] = useState(false);

  const lvnInitStudent = {
    lvnHoSV: "Lưu",
    lvnTenSV: "Viet Nam",
    lvnPhai: true,
    lvnNgaySinh: 10102002,
    lvnNoiSinh: "Hà Nội",
    lvnMaKH: "11",
    lvnHocBong: "Toàn Phần",
    lvnDiemTrungBinh: "9",
    lvnMaSV: "2010900024"
  }

  const [lvnStudent,setLvnStudent] = useState(lvnInitStudent);

  // Hàm xử lý khi thêm mới
  const lvnHandleAddNew = () => {
    setLvnFormAddOrEdit(true);
  }

  const lvnHandleClose = (param) => {
    setLvnFormAddOrEdit(param);
  }

  const lvnHandleSubmit = (param) => {
    lvnGetAllStudent();
    setLvnFormAddOrEdit(param);
  }

  const lvnHandleDelete = () => {
    lvnGetAllStudent();
  };

  let lvnElementForm = LvnFormAddOrEdit === true ? <LvnFormAddOrEdit renderStudent={lvnStudent} onLvnClose={lvnHandleClose} onLvnSubmitForm={lvnHandleSubmit} /> : null;

  return (
    <div className='container border my-3'>
      <h1>Làm việc với API</h1>
      <hr />
      <LvnListSinhVien renderlvnListSinhVien={lvnListSinhVien} onLvnDelete={lvnHandleDelete} />
      <button className='btn btn-primary' onClick={lvnHandleAddNew}>Thêm mới</button>
      <hr />
      {lvnElementForm}
    </div>
  )
}

export default LvnApp;