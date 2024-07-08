
import './App.css';
import LvnListSinhVien from './components/LvnListSinhVien';
import axios from './api/lvnApi'
import { useEffect, useState } from 'react';
import LvnFormAddOrEdit from './components/LvnFormAddOrEdit';
function LvnApp() {
  
  const [lvnListSinhVien,setLvnListSinhVien] = useState([]);

  // đọc dữ liệu từ api
  const lvnGetAllSinhVien = async  ()=>{
    const lvnResponse = await axios.get("lvnSinhVien");
    console.log("Api Data:",lvnResponse.data);
    setLvnListSinhVien(lvnResponse.data)
  }

  
  useEffect(()=>{
    lvnGetAllSinhVien();
    console.log("State Data:",lvnListSinhVien);
  },[])

  const [lvnAddOrEdit, setLvnAddOrEdit] = useState(false);
  const lvnInitSinhViens = {
      MaSV: "2010900024",
      HoSV: "Lưu Viết",
      TenSV: "Nam",
      Phai: "123456789",
      NgaySinh:"10/10/2002",
      NoiSinh:"Hà Nội",
      MaKH:"01",
      HocBong:"Toàn Phần",
      DiemTrungBinh:"9",
      id: "24"
  }
  const [lvnSinhViens, setLvnSinhViens] = useState(lvnInitSinhViens);

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
    lvnGetAllSinhVien();
  }
  let lvnElementForm = lvnAddOrEdit===true?
      <LvnFormAddOrEdit renderSinhVien={lvnSinhViens} 
                        onLvnClose={lvnHandleClose}
                        onLvnSubmitForm={lvnHandleSubmit}/>:"";
  return (
    <div className="container border my-3">
        <h1>Làm việc với MockApi</h1>
        <hr/>
        <LvnListUsers  renderLvnListSinhVien={lvnListSinhVien} onLvnDelete={lvnHandleDelete}/>
        <button className='btn btn-primary' name='btnLvnThemMoi' onClick={lvnHandleAddNew}>Thêm mới</button>
        <hr/>
        {lvnElementForm}
    </div>
  );
}

export default LvnApp;
