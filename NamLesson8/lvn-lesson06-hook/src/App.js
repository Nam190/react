import logo from './logo.svg';
import './App.css';
import React, { useState , useEffect } from 'react';
import LvnListTask from './components/LvnListTask';
import LvnTaskAddOrEdit from './components/LvnTaskAddOrEdit';

function App() {
  //Mock data
  const lvn_listTasks = [
    {
      lvn_taskId: 2201234,
      lvn_taskName: "Nguyễn ",
      lvn_level: "Small",
    },
    {
      lvn_taskId: 1,
      lvn_taskName: "Học lập trình frontend",
      lvn_level: "Small",
    },
    {
      lvn_taskId: 2,
      lvn_taskName: "Học lập trình reactjs",
      lvn_level: "Medium",
    },
    {
      lvn_taskId: 3,
      lvn_taskName: "Lập trình với Frontend - Reactjs",
      lvn_level: "High",
    },
    {
      lvn_taskId: 4,
      lvn_taskName: "Lập trình Fullstack (PHP, Java, NetCore)",
      lvn_level: "Small",
    },
  ];

  let data = JSON.parse(localStorage.getItem("LvnK22CNT1DataTasks"));
  if (data === null || data.length === 0) {
      data = lvn_listTasks;
      localStorage.setItem("LvnK22CNT1DataTasks", JSON.stringify(data));
  }

  // sử dụng hàm useState để lưu trữ trạng thái dữ liệu
  const [lvnListTasks, setLvnListTasks] = useState(data);

  useEffect(() => {
      localStorage.setItem("LvnK22CNT1DataTasks", JSON.stringify(lvnListTasks));
  }, [lvnListTasks]);

  // sử dụng hàm useState để lưu trữ trạng thái dữ liệu
  const lvnHandleSubmit = (lvnParam) => {
    if (lvnAddOrEdit === false) {
      // khi thêm mới
      setLvnListTasks((prev) => {
        return [...prev, lvnParam];
      });
    } else {
      // submit khi sửa
      for (let i = 0; i < lvnListTasks.length; i++) {
        if (lvnListTasks[i].lvn_taskId == lvnParam.lvn_taskId) {
          lvnListTasks[i] = lvnParam;
        }
      }
      setLvnListTasks((prev) => {
        return [...prev];
      });
    }
  };

  // ham xu ly đón dữ liệu sửa
  const handleDelete = (taskId) => {
    setLvnListTasks((prev) => prev.filter((task) => task.lvn_taskId !== taskId));
  };

  // lữu trữ state
  const task = { lvn_taskId: 0, lvn_taskName: "HD", lvn_level: "small" };
  const [lvnTask, setLvnTask] = useState(task); // dùng để render form
  // quản lí form khi thêm / sửa
  const [lvnAddOrEdit, setLvnAddOrEdit] = useState(false); // Them 
  const HandleEdit = (param) => {
    setLvnTask(param);
    setLvnAddOrEdit(true);
  };

  return (
    <div className="container-border">
      <h1>Lưu Viết Name</h1>
      <hr />
      <div>
        {/*Danh sach list task*/}
        <LvnListTask 
          renderLvnListTasks={lvnListTasks}
          onLvnEdit={HandleEdit}
          onLvnDelete={handleDelete} 
        />
      </div>
      <div>
        <LvnTaskAddOrEdit 
          lvnOnSubmit={lvnHandleSubmit}
          renderLvnAddOrEdit={lvnAddOrEdit}
          renderLvnTask={lvnTask} 
        />
      </div>
    </div>
  );
}

export default App;
