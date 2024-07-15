import axios from '../lvn_apis/lvn-2010900024'
import React, { useEffect, useState } from 'react'

export default function LvnFormTableName({renderLvnTableName,onLvnEdit}){
    const [lvnId,setLvnId] = useState(renderLvnTableName.lvnId)
    const [lvnTbName,setLvnTbName] = useState(renderLvnTableName.lvnTbName)
    const [lvnTbEmail,setLvnTbEmail] = useState(renderLvnTableName.lvnTbEmail)
    const [lvnTbPhone,setLvnTbPhone] = useState(renderLvnTableName.lvnTbPhone)
    const [lvnTbStatus,setLvnTbStatus] = useState(renderLvnTableName.lvnTbStatus)

    useEffect(()=>{
        setLvnId(renderLvnTableName.lvnId)
        setLvnTbName(renderLvnTableName.lvnTbName)
        setLvnTbEmail(renderLvnTableName.lvnTbEmail)
        setLvnTbPhone(renderLvnTableName.lvnTbPhone)
        setLvnTbStatus(renderLvnTableName.lvnTbStatus)
    },[renderLvnTableName])

    const lvnHandleSubmit = async (lvnEvent)=>{
        lvnEvent.preventDefault();
        const lvnObjTableName = {
                "lvnTbName": lvnTbName,
                "lvnTbEmail": lvnTbEmail,
                "lvnTbPhone": lvnTbPhone,
                "lvnTbStatus": lvnTbStatus,
                "lvnId": lvnId
        }
        console.log(lvnObjTableName);

        // thêm dữ liệu vào  api
        await axios.put("lvnTableName"+lvnObjTableName.lvnId,lvnObjTableName);
        onLvnEdit();
    } 

    return(
        <div>
            <h2>Form xử lý dữ liệu thêm mới</h2>
            <form>
            <div className="input-group mb-3">
                <span className="input-group-text" id="lvnId"></span>
                <input type="text" className="form-control" placeholder="lvnId" 
                    name='lvnId'
                    value={lvnId}
                    onChange={(lvnEv)=>setLvnId(lvnEv.target.value)}
                    aria-label="lvnId" 
                    aria-describedby="lvnId"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="lvnTbName">lvnTbName</span>
                <input type="text" className="form-control" placeholder="lvnTbName" 
                    name='lvnTbName'
                    value={lvnTbName}
                    onChange={(lvnEv)=>setLvnTbName(lvnEv.target.value)}
                    aria-label="lvnTbName" 
                    aria-describedby="lvnTbName"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="lvnTbEmail">lvnTbEmail</span>
                <input type="text" className="form-control" placeholder="luunam990@gmail.com" 
                    name='lvnTbEmail'
                    value={lvnTbEmail}
                    onChange={(lvnEv)=>setLvnTbEmail(lvnEv.target.value)}
                    aria-label="lvnTbEmail" 
                    aria-describedby="lvnTbEmail"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="lvnTbPhone">lvnTbPhone</span>
                <input type="text" className="form-control" placeholder="0384322743" 
                    name='lvnTbPhone'
                    value={lvnTbPhone}
                    onChange={(lvnEv)=>setLvnTbPhone(lvnEv.target.value)}
                    aria-label="lvnTbPhone" 
                    aria-describedby="lvnTbPhone"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="lvnTbStatus">lvnTbStatus</span>
                <select  id='lvnTbStatus' className='form-control'
                         name='lvnTbStatus'
                         value={lvnTbStatus}
                         onChange={(lvnEv)=>setLvnTbStatus(lvnEv.target.value)}
                        >
                        <option value={true}>Active</option>
                        <option value={false}>Non-Active</option>
                </select>
            </div>
            <button className='btn btn-primary my-3' name='btnLvnSave' onClick={lvnHandleSubmit}>Lvn: Save</button>
            </form>
        </div>
    )
}