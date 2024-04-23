import React, { useState, useEffect } from 'react'
import './ToDoList.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    showTasksFromLocalStorage();
  }, []);

  const addTask = () => {
    if (inputValue === '') {
      toast("You must write something!");
    } else {
      const newTask = {
        text: inputValue,
        id: Date.now()
      };
      setTasks(prevTasks => [...prevTasks, newTask]);
      saveData([...tasks, newTask]);
      setInputValue('');
    }
  }

  const toggleTask = (id) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task => {
        if (task.id === id) {
          return { ...task, checked: !task.checked };
        }
        return task;
      });
      saveData(updatedTasks);
      return updatedTasks;
    });
  };

  const deleteTask = (id) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.filter(task => task.id !== id);
      saveData(updatedTasks);
      return updatedTasks;
    });
  };

  const saveData = (data) => {
    localStorage.setItem("tasksData", JSON.stringify(data));
  };

  const showTasksFromLocalStorage = () => {
    const storedData = JSON.parse(localStorage.getItem("tasksData")) || [];
    setTasks(storedData);
  };

  return (
    <div className='todo-app'>
      {/* <h3>To-Do List</h3> */}
      <div className='row'>
        <input
          className='inp-fil'
          type='text'
          placeholder='What do you need to do today ?'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="to-btn" onClick={addTask}>Add</button>
        <ToastContainer />
      </div>
      <ul id='list-container'>
        {tasks.map(task => (
          <li
            key={task.id}
            className={task.checked ? 'checked' : ''}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
            <span className='lopi' onClick={() => deleteTask(task.id)}>&times;</span>

          </li>
        ))}
      </ul>
    </div>


  )
}

export default ToDoList














































































































































































































































































































































// ------------------------------Remove---------------------------------------------

// import React from 'react'
// import './ToDoList.css'

// function ToDoList() {

//   return (
//     <div className='container'>
//           <div className='todo-app'>
//              <h2>To-Do List</h2>
//              <div className='row'>
//                 <input type='text' id='input-box' placeholder='Add your text'/>
//                 <button onClick="addTask()">Add</button>
//              </div>
//              <ul id='list-container'>
//              {/* <li className='checked'>Task 1</li>
//              <li>Task 2</li>
//              <li>Task 3</li>
//              <li>Task 4</li> */}
//              </ul>
//           </div>
//     </div>
//   )
// }

// export default ToDoList

// import React, { useState, useEffect } from 'react';
// import './ToDoList.css';

// function ToDoList() {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     showTasks();
//   }, []);

//   function addTask() {
//     const inputBox = document.getElementById("input-box");
//     if (inputBox.value === '') {
//       alert("You must write something!");
//     } else {
//       const newTask = inputBox.value;
//       setTasks([...tasks, newTask]);
//       inputBox.value = '';
//       saveData([...tasks, newTask]);
//     }
//   }

//   function toggleTask(index) {
//     const updatedTasks = [...tasks];
//     updatedTasks[index] = { ...updatedTasks[index], checked: !updatedTasks[index].checked };
//     setTasks(updatedTasks);
//     saveData(updatedTasks);
//   }

//   function removeTask(index) {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//     saveData(updatedTasks);
//   }

//   function saveData(data) {
//     localStorage.setItem("data", JSON.stringify(data));
//   }

//   function showTasks() {
//     const data = localStorage.getItem("data");
//     if (data) {
//       setTasks(JSON.parse(data));
//     }
//   }

//   return (
//     <div className='container'>
//       <div className='todo-app'>
//         <h2>To-Do List</h2>
//         <div className='row'>
//           <input type='text' id='input-box' placeholder='Add your text' />
//           <button onClick={addTask}>Add</button>
//         </div>
//         <ul id='list-container'>
//           {tasks.map((task, index) => (
//             <li key={index} className={task.checked ? 'checked' : ''}>
//               {task.value}
//               <span onClick={() => removeTask(index)}>&times;</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default ToDoList;
