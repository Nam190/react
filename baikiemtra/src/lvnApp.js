import React, { useState, useEffect } from 'react';
import axios from './api/api';
import LvnSinhVienList from './components/lvnSinhVienList';
import LvnSinhVienAddOrEdit from './components/lvnSinhVienAddOrEdit';

const LvnApp = () => {
  const [lvnSinhVienList, setLvnSinhVienList] = useState([]);

  // Hàm để lấy dữ liệu từ API
  const lvnGetAllStudent = async () => {
    try {
      const response = await axios.get("lvnSinhVien");
      console.log("API Data:", response.data);
      setLvnSinhVienList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    lvnGetAllStudent();
    console.log("State Data:", lvnSinhVienList);
  }, []); // Dùng mảng rỗng để effect chỉ chạy một lần khi component mount

  const [lvnSinhVienAddOrEdit, setLvnSinhVienAddOrEdit] = useState(false);

  const lvnInitStudent = {
    lvnHoSV: "Lưu",
    lvnTenSV: "Viết Nam",
    lvnPhai: true,
    lvnNgaySinh: 10102002,
    lvnNoiSinh: "Hà Nội",
    lvnMaKH: "11",
    lvnHocBong: "toàn phần",
    lvnDiemTrungBinh: "9",
    lvnMaSV: "2010900024"
  }

  const [lvnStudent, setLvnStudent] = useState(lvnInitStudent);

  // Hàm xử lý khi thêm mới
  const lvnHandleAddNew = () => {
    setLvnSinhVienAddOrEdit(true);
  }

  const lvnHandleClose = (param) => {
    setLvnSinhVienAddOrEdit(param);
  }

  const lvnHandleSubmit = (param) => {
    lvnGetAllStudent();
    setLvnSinhVienAddOrEdit(param);
  }

  const lvnHandleDelete = () => {
    lvnGetAllStudent();
  };

  let lvnElementForm = lvnSinhVienAddOrEdit === true ? <LvnSinhVienAddOrEdit renderStudent={lvnStudent} onLvnClose={lvnHandleClose} onLvnSubmitForm={lvnHandleSubmit} /> : null;

  return (
    <div className='container border my-3'>
      <h1>Làm việc với API</h1>
      <hr />
      <LvnSinhVienList renderlvnSinhVienList={lvnSinhVienList} onLvnDelete={lvnHandleDelete} />
      <button className='btn btn-primary' onClick={lvnHandleAddNew}>Thêm mới</button>
      <hr />
      {lvnElementForm}
    </div>
  )
}

export default LvnApp;
