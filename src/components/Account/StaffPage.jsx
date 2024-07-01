import React, { useState } from 'react';
import '../../assets/css/StaffPage.css';

const StaffPage = () => {
  const [tasks] = useState({
    todo: [
      { id: 'T001', service: 'Bath and Groom', pet: 'Bella', owner: 'John Doe', date: '2024-07-01', time: '10:00 AM' },
      { id: 'T002', service: 'Nail Trimming', pet: 'Max', owner: 'Jane Smith', date: '2024-07-01', time: '11:00 AM' },
    ],
    inProgress: [
      { id: 'T003', service: 'Haircut', pet: 'Luna', owner: 'Mary Johnson', date: '2024-07-01', time: '09:30 AM' },
    ],
    done: [
      { id: 'T004', service: 'Dental Cleaning', pet: 'Charlie', owner: 'David Brown', date: '2024-06-30', time: '03:00 PM' },
    ],
  });

  const [activeTab, setActiveTab] = useState('todo');

  const printTasks = (tasksToPrint) => {
    const newWindow = window.open("", "", "height=800,width=600");
    newWindow.document.write("<html><head><title>Print</title>");
    newWindow.document.write(
      '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" type="text/css" />'
    );
    newWindow.document.write("<style>");
    newWindow.document.write(
      "@media print { body { -webkit-print-color-adjust: exact; margin: 20px; font-size: 18px; }"
    );
    newWindow.document.write(
      ".printable-content { width: 100%; margin: auto; }"
    );
    newWindow.document.write(
      ".card-body { padding: 20px; border: 1px solid #dee2e6; border-radius: 4px; }"
    );
    newWindow.document.write(
      ".media-1 { margin-bottom: 20px; display: flex; align-items: center; }"
    );
    newWindow.document.write(".media-body { padding: 10px; }");
    newWindow.document.write("img { max-width: 100%; height: auto; }");
    newWindow.document.write(
      ".h5, .h5 a { font-size: 1.5rem; font-weight: 500; margin-bottom: 0.5rem; }"
    );
    newWindow.document.write(".text-body { font-size: 1rem; color: #000; }");
    newWindow.document.write(".d-print-none { display: none; }"); // Hide print button
    newWindow.document.write("</style>");
    newWindow.document.write("</head><body class='printable-content'>");

    tasksToPrint.forEach((task) => {
      newWindow.document.write(`<div class='card-body'>${task.service} for ${task.pet} (${task.id}) at ${task.time} on ${task.date}</div>`);
      newWindow.document.write("<hr>"); // Add a separator between tasks
    });

    newWindow.document.close();
    newWindow.focus(); // Necessary for IE >= 10
    newWindow.print();
  };

  return (
    <div className="staff-page">
      <h1>Staff Page</h1>
      <div className="tab-section">
        <div className={`tab-title ${activeTab === 'todo' ? 'active' : ''}`} onClick={() => setActiveTab('todo')}>
          Chưa làm ({tasks.todo.length})
        </div>
        <div className={`tab-title ${activeTab === 'inProgress' ? 'active' : ''}`} onClick={() => setActiveTab('inProgress')}>
          Đang làm ({tasks.inProgress.length})
        </div>
        <div className={`tab-title ${activeTab === 'done' ? 'active' : ''}`} onClick={() => setActiveTab('done')}>
          Hoàn thành ({tasks.done.length})
        </div>
      </div>
      <div className={`task-content ${activeTab !== 'todo' ? 'hidden' : ''}`}>
        <TaskList tasks={tasks.todo} printTasks={printTasks} />
      </div>
      <div className={`task-content ${activeTab !== 'inProgress' ? 'hidden' : ''}`}>
        <TaskList tasks={tasks.inProgress} printTasks={printTasks} />
      </div>
      <div className={`task-content ${activeTab !== 'done' ? 'hidden' : ''}`}>
        <TaskList tasks={tasks.done} printTasks={printTasks} />
      </div>
    </div>
  );
};

const TaskList = ({ tasks, printTasks }) => {
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleTaskSelect = (task) => {
    setSelectedTasks((prevSelectedTasks) =>
      prevSelectedTasks.includes(task)
        ? prevSelectedTasks.filter((t) => t !== task)
        : [...prevSelectedTasks, task]
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Dịch vụ</th>
            <th>Thú cưng</th>
            <th>Chủ nhân</th>
            <th>Ngày</th>
            <th>Giờ</th>
            <th>Chọn</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>
              <td>{task.service}</td>
              <td>{task.pet}</td>
              <td>{task.owner}</td>
              <td>{task.date}</td>
              <td>{task.time}</td>
              <td>
                <input
                  type="checkbox"
                  checked={selectedTasks.includes(task)}
                  onChange={() => handleTaskSelect(task)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="print-button" onClick={() => printTasks(selectedTasks)} disabled={selectedTasks.length === 0}>
        Print Selected Tasks
      </button>
    </div>
  );
};

export default StaffPage;
