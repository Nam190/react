import React, { useEffect, useState } from 'react';

export default function LvnTaskAddOrEdit({ lvnOnSubmit, renderLvnTask, renderLvnAddOrEdit }) {
  console.log("LvnTaskAddOrEdit:", renderLvnTask, renderLvnAddOrEdit);

  // Đối tượng task
  const lvnTaskObj = {
    lvn_taskId: 0,
    lvn_taskName: "",
    lvn_level: ""
  };

  const [lvnTask, setLvnTask] = useState(renderLvnTask);

  useEffect(() => {
    setLvnTask(renderLvnTask);
  }, [renderLvnTask]);

  console.log("State:", lvnTask);

  // Hàm xử lý thay đổi điều khiển
  const lvnHandleChange = (lvnEvent) => {
    const { name, value } = lvnEvent.target;

    setLvnTask(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const lvnHandleSubmit = (lvnEvent) => {
    lvnEvent.preventDefault();
    lvnOnSubmit(lvnTask);
  }

  const lvnTitle = renderLvnAddOrEdit === false ? "Thêm mới task:" : "Sửa task";

  return (
    <div>
      <h2>{lvnTitle}</h2>
      <form>
        <div className='input-group mb-3'>
          <span className='input-group-text' id="basic-addon1">Task ID</span>
          <input 
            name='lvn_taskId' 
            value={lvnTask.lvn_taskId} 
            onChange={lvnHandleChange} 
            className="form-control" 
            placeholder="Task ID" 
            aria-label="Task ID" 
            aria-describedby="basic-addon1"
          />
        </div>
        <div className='input-group mb-3'>
          <span className='input-group-text' id="basic-addon2">Task Name</span>
          <input 
            name='lvn_taskName' 
            value={lvnTask.lvn_taskName} 
            onChange={lvnHandleChange} 
            className="form-control" 
            placeholder="Task Name" 
            aria-label="Task Name" 
            aria-describedby="basic-addon2"
          />
        </div>
        <div className='input-group mb-3'>
          <span className='input-group-text' id='basic-addon3'>Task Level</span>
          <select 
            name='lvn_level' 
            value={lvnTask.lvn_level} 
            onChange={lvnHandleChange} 
            className='form-control' 
            aria-describedby='basic-addon3'
          >
            <option value={'Small'}>Small</option>
            <option value={'Medium'}>Medium</option>
            <option value={'High'}>High</option>
          </select>
        </div>
        <button onClick={lvnHandleSubmit} className='btn btn-primary'>Ghi lại</button>
      </form>
    </div>
  )
}
