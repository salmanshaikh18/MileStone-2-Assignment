// import React, { useState } from 'react'
// import './HomePage.css'

// const HomePage = () => {
//     let [todoStatus, setTodoStatus] = useState('Pending')
//     let [todoNum, setTodoNum] = useState('1')
//     const updateBtnHandler = () => {
//         if (todoStatus === 'Pending') {
//             setTodoStatus('Completed')
//         } else {
//             setTodoStatus('Pending')
//         }
//     }

//     const removeBtnHandler = () => {
//         const box = document.querySelector('#box')
//         box.style.display = 'none'
//     }

//     const addBtnHandler = () => {
//         setTodoNum(todoNum++)
//         const wrapper = document.getElementById('wrapper')
//         const box = document.createElement('div')
//         box.setAttribute('id', 'box')
//         box.innerHTML = `
//             <h1><span id="todoNum">${todoNum}. </span>To Do List:</h1>
//             <h3>Status: <span id="status">${todoStatus}</span></h3>
//             <button id="updateBtn" onClick="${updateBtnHandler}">Update Status</button>
//             <button id="removeBtn" onClick="${removeBtnHandler}">Remove</button>
//         `
//         wrapper.appendChild(box)
//     }
//   return (
//     <div className="container" id="wrapper">
//         <header>
//             <input id="todoInput" type="text" />
//             <button id="addBtn" onClick={addBtnHandler}>Add</button>
//         </header>
//         <div id="box">
//             <h1><span id="todoNum">{todoNum}. </span>To Do List:</h1>
//             <h3>Status: <span id="status">{todoStatus}</span></h3>
//             <button id="updateBtn" onClick={updateBtnHandler}>Update Status</button>
//             <button id="removeBtn" onClick={removeBtnHandler}>Remove</button>
//         </div>
//     </div>
//   )
// }

// export default HomePage










import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [todoNum, setTodoNum] = useState(1);
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const updateBtnHandler = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: todo.status === 'Pending' ? 'Completed' : 'Pending' };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeBtnHandler = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const addBtnHandler = () => {
    if (newTodo.trim() === '') return;
    setTodoNum(todoNum + 1);

    const todo = {
      id: todoNum,
      title: newTodo,
      status: 'Pending',
    };

    setTodos([...todos, todo]);
    setNewTodo('');
  };

  const handleInput = (event) => {
    if (event.key === 'Enter') {
      addBtnHandler()
    }
  }

  return (
    <div className="container">
      <header>
        <input
          id="todoInput"
          type="text"
          placeholder="Enter a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleInput}
        />
        <button id="addBtn" onClick={addBtnHandler}>
          Add
        </button>
      </header>
      <div id="todoList">
        {todos.map((todo) => (
          <div className="box" id="box" key={todo.id}>
            <h1>
              <span id="todoNum">{todo.id}. </span>{todo.title}
            </h1>
            <h3>
              Status: <span id="status">{todo.status}</span>
            </h3>
            <button id="updateBtn" onClick={() => updateBtnHandler(todo.id)}>
              Update Status
            </button>
            <button id="removeBtn" onClick={() => removeBtnHandler(todo.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="footer">
        
      </div>
    </div>
  );
};

export default HomePage;
