import axios from '../api/lvnApi'
import React, { useEffect, useState } from 'react'

export default function LvnFormAddOrEdit({onLvnClose, onLvnSubmitForm, renderSinhVien}) {

    console.log(renderSinhVien);
    const [lvnId, setLvnId] = useState(0);
    const [lvnMaSV, setLvnMaSV] = useState("");
    const [lvnHoSV, setLvnHoSV] = useState("");
    const [lvnTenSV, setLvnTenSV] = useState("");
    const [lvnPhai, setLvnPhai] = useState("");
    const [lvnNgaySinh, setLvnNgaySinh] = useState("");
    const [lvnNoiSinh, setNoiSinh] = useState("");
    const [lvnMaKH, setLvnMaKH] = useState("");
    const [lvnHocBong, setLvnHocBong] = useState("");
    const [lvnDiemTrungBinh, setLvnDiemTrungBinh] = useState("");

    useEffect(()=>{
        setLvnId(renderSinhVien.id)
        setLvnMaSV(renderSinhVien.MaSV)
        setLvnHoSV(renderSinhVien.HoSV)
        setLvnTenSV(renderSinhVien.TenSV)
        setLvnPhai(renderSinhVien.Phai)
        setLvnNgaySinh(renderSinhVien.NgaySinh)
        setNoiSinh(renderSinhVien.NoiSinh)
        setLvnMaKH(renderSinhVien.MaKH)
        setLvnHocBong(renderSinhVien.HocBong)
        setLvnDiemTrungBinh(renderSinhVien.DiemTrungBinh)
    },[renderSinhVien])


    const lvnHandleClose = ()=>{
        onLvnClose(false);
    }

    const lvnHandleSubmit= async (event)=>{
        event.preventDefault();
        console.log(lvnId,lvnMaSV,lvnHoSV,lvnTenSV,lvnPhai,lvnNgaySinh,lvnNoiSinh,lvnMaKH,lvnHocBong,lvnDiemTrungBinh);
        // post -> api
        let lvnObjSinhVien = {
            MaSV: lvnMaSV,
            HoSV: lvnHoSV,
            TenSV: lvnTenSV,
            Phai: lvnPhai,
            NgaySinh:lvnNgaySinh,
            NoiSinh:lvnNoiSinh,
            MaKH:lvnMaKH,
            HocBong:lvnHocBong,
            DiemTrungBinh:lvnDiemTrungBinh,
            id: lvnId
        }
        const lvnResponse = await axios.post("lvnSinhVien",lvnObjSinhVien);

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
            <span className="input-group-text" id="MaSV">MaSV</span>
            <input type="text" class="form-control" 
                name='MaSV' value={lvnMaSV} onChange={(ev)=>setLvnMaSV(ev.target.value)}
                placeholder="MaSV" aria-label="MaSV" aria-describedby="MaSV"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="HoSV">HoSV</span>
            <input type="HoSV" class="form-control" 
                name='HoSV' value={lvnHoSV} onChange={(ev)=>setLvnHoSV(ev.target.value)}
                placeholder="HoSV" aria-label="HoSV" aria-describedby="HoSV"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="TenSV">TenSV</span>
            <input type="TenSV" class="form-control" 
                name='TenSV' value={lvnTenSV} onChange={(ev)=>setLvnTenSV(ev.target.value)}
                placeholder="TenSV" aria-label="TenSV" aria-describedby="TenSV"/>
        </div>
        
        <div className="input-group mb-3">
            <span className="input-group-text" id="Phai">Phai</span>
            <input type="number" class="form-control" 
                name='Phai' value={lvnPhai} onChange={(ev)=>setLvnPhai(ev.target.value)}
                placeholder="Phai" aria-label="Phai" aria-describedby="Phai"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="NgaySinh">NgaySinh</span>
            <input type="number" class="form-control" 
                name='NgaySinh' value={lvnNgaySinh} onChange={(ev)=>setLvnNgaySinh(ev.target.value)}
                placeholder="NgaySinh" aria-label="NgaySinh" aria-describedby="NgaySinh"/>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="NoiSinh">NoiSinh</span>
        <input type="number" class="form-control" 
            name='NoiSinh' value={lvnNoiSinh} onChange={(ev)=>setLvnNoiSinh(ev.target.value)}
            placeholder="NoiSinh" aria-label="NoiSinh" aria-describedby="NoiSinh"/>
    </div>
    <div className="input-group mb-3">
        <span className="input-group-text" id="MaKH">MaKH</span>
        <input type="number" class="form-control" 
            name='MaKH' value={lvnMaKH} onChange={(ev)=>setLvnMaKH(ev.target.value)}
            placeholder="MaKH" aria-label="MaKH" aria-describedby="MaKH"/>
    </div>
    <div className="input-group mb-3">
        <span className="input-group-text" id="HocBong">HocBong</span>
        <input type="number" class="form-control" 
            name='HocBong' value={lvnHocBong} onChange={(ev)=>setLvnHocBong(ev.target.value)}
            placeholder="HocBong" aria-label="HocBong" aria-describedby="HocBong"/>
    </div>
    <div className="input-group mb-3">
    <span className="input-group-text" id="DiemTrungBinh">DiemTrungBinh</span>
    <input type="number" class="form-control" 
        name='DiemTrungBinh' value={lvnDiemTrungBinh} onChange={(ev)=>setLvnDiemTrungBinh(ev.target.value)}
        placeholder="DiemTrungBinh" aria-label="DiemTrungBinh" aria-describedby="DiemTrungBinh"/>
</div>

        <button className='btn btn-primary' name='btnLvnSave' onClick={(ev)=>lvnHandleSubmit(ev)}>Ghi lại</button>
        <button className='btn btn-danger' onClick={lvnHandleClose}>Đóng</button>
      </form>
    </div>
  )
}
