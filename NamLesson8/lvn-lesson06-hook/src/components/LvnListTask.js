import React from 'react';

export default function LvnListTask({ renderLvnListTasks, onLvnEdit, onLvnDelete }) {
  console.log(renderLvnListTasks);

  // Hàm xử lý dữ liệu khi edit
  const lvnHandleEdit = (task) => {
    console.log("edit:", task);
    // Chuyển đổi dữ liệu trên app
    onLvnEdit(task);
  }

  const lvnHandleDelete = (taskId) => {
    // Gọi hàm xử lý xóa từ props
    onLvnDelete(taskId);
  }

  // Render data
  let lvnElementTask = renderLvnListTasks.map((task, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{task.lvn_taskId}</td>
        <td>{task.lvn_taskName}</td>
        <td>{task.lvn_task_level}</td>
        <td>
          <button className='btn btn-success' onClick={() => lvnHandleEdit(task)}>Edit</button>
          <button className='btn btn-danger' onClick={() => lvnHandleDelete(task.lvn_taskId)}>Remove</button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h2>Danh sách các nhiệm vụ</h2>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>STT</th>
            <th>Task Id</th>
            <th>Task Name</th>
            <th>Task Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {lvnElementTask}
        </tbody>
      </table>
    </div>
  );
}
