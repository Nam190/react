import React, { useEffect, useState } from 'react';
import axios from '../api/lvnApi';

export default function lvnFormAddOrEdit({ onlvnClose, onlvnSubmitForm, renderStudent }) {
    console.log(renderStudent);

    const [lvnMaSV, setlvnMaSV] = useState(0);
    const [lvnHoSV, setlvnHoSV] = useState("");
    const [lvnTenSV, setlvnTenSV] = useState("");
    const [lvnPhai, setlvnPhai] = useState("");
    const [lvnNgaySinh, setlvnNgaySinh] = useState("");
    const [lvnNoiSinh, setlvnNoiSinh] = useState("");
    const [lvnMaKH, setlvnMaKH] = useState("");
    const [lvnHocBong, setlvnHocBong] = useState("");
    const [lvnDiemTrungBinh, setlvnDiemTrungBinh] = useState("");

    useEffect(() => {
        if (renderStudent) {
            setlvnMaSV(renderStudent.id);
            setlvnHoSV(renderStudent.HoSV);
            setlvnTenSV(renderStudent.TenSV);
            setlvnPhai(renderStudent.Phai);
            setlvnNgaySinh(renderStudent.NgaySinh);
            setlvnNoiSinh(renderStudent.NoiSinh);
            setlvnMaKH(renderStudent.MaKH);
            setlvnHocBong(renderStudent.HocBong);
            setlvnDiemTrungBinh(renderStudent.DiemTrungBinh);
        }
    }, [renderStudent]);

    const lvnHandleClose = () => {
        onlvnClose(false);
    };

    const lvnHandleSubmit = async (event) => {
        event.preventDefault();
        console.log(lvnMaSV, lvnHoSV, lvnTenSV, lvnPhai, lvnNgaySinh, lvnNoiSinh, lvnMaKH, lvnHocBong, lvnDiemTrungBinh);
        let lvnObjectStudent = {
            id: lvnMaSV,
            HoSV: lvnHoSV,
            TenSV: lvnTenSV,
            Phai: lvnPhai,
            NgaySinh: lvnNgaySinh,
            NoiSinh: lvnNoiSinh,
            MaKH: lvnMaKH,
            HocBong: lvnHocBong,
            DiemTrungBinh: lvnDiemTrungBinh
        };
        const lvnRes = await axios.post("lvnStudent", lvnObjectStudent);
        onlvnSubmitForm(false);
    };

    return (
        <div className='border'>
            <div className="input-group mb-3">
                <span className="input-group-text" id="MaSV">MaSV</span>
                <input type="text" className="form-control"
                    name='MaSV' value={lvnMaSV} onChange={(ev) => setlvnMaSV(ev.target.value)}
                    placeholder="MaSV" aria-label="MaSV" aria-describedby="MaSV" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="HoSV">HoSV</span>
                <input type="text" className="form-control"
                    name='HoSV' value={lvnHoSV} onChange={(ev) => setlvnHoSV(ev.target.value)}
                    placeholder="HoSV" aria-label="HoSV" aria-describedby="HoSV" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="TenSV">TenSV</span>
                <input type="text" className="form-control"
                    name='TenSV' value={lvnTenSV} onChange={(ev) => setlvnTenSV(ev.target.value)}
                    placeholder="TenSV" aria-label="TenSV" aria-describedby="TenSV" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="Phai">Phai</span>
                <input type="text" className="form-control"
                    name='Phai' value={lvnPhai} onChange={(ev) => setlvnPhai(ev.target.value)}
                    placeholder="Phai" aria-label="Phai" aria-describedby="Phai" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="NoiSinh">NoiSinh</span>
                <input type="text" className="form-control"
                    name='NoiSinh' value={lvnNoiSinh} onChange={(ev) => setlvnNoiSinh(ev.target.value)}
                    placeholder="NoiSinh" aria-label="NoiSinh" aria-describedby="NoiSinh" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="MaKH">MaKH</span>
                <input type="text" className="form-control"
                    name='MaKH' value={lvnMaKH} onChange={(ev) => setlvnMaKH(ev.target.value)}
                    placeholder="MaKH" aria-label="MaKH" aria-describedby="MaKH" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="HocBong">HocBong</span>
                <input type="text" className="form-control"
                    name='HocBong' value={lvnHocBong} onChange={(ev) => setlvnHocBong(ev.target.value)}
                    placeholder="HocBong" aria-label="HocBong" aria-describedby="HocBong" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="DiemTrungBinh">DiemTrungBinh</span>
                <input type="text" className="form-control"
                    name='DiemTrungBinh' value={lvnDiemTrungBinh} onChange={(ev) => setlvnDiemTrungBinh(ev.target.value)}
                    placeholder="DiemTrungBinh" aria-label="DiemTrungBinh" aria-describedby="DiemTrungBinh" />
            </div>
            
            <button className='btn btn-primary' name='btnlvnSave' onClick={(ev) => lvnHandleSubmit(ev)}>Ghi lai</button>
            <button className='btn btn-danger' onClick={lvnHandleClose}>Dong</button>
        </div>
    );
}