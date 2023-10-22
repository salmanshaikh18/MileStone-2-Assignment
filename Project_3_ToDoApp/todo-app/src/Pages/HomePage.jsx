import React, { useState } from 'react'
import './HomePage.css'

const HomePage = () => {
    let [todoStatus, setTodoStatus] = useState('Pending')
    let [todoNum, setTodoNum] = useState('1')
    const updateBtnHandler = () => {
        if (todoStatus === 'Pending') {
            setTodoStatus('Completed')
        } else {
            setTodoStatus('Pending')
        }
    }

    const removeBtnHandler = () => {
        const box = document.querySelector('.box')
        box.style.display = 'none'
    }

    const addBtnHandler = () => {
        setTodoNum(todoNum++)
        const container = document.querySelector('.container')
        const box = document.createElement('div')
        box.setAttribute('className', 'box')
        container.appendChild(box)

        const h1 = document.createElement('h1')
        h1.innerHTML = todoNum + document.querySelector('input').value
        box.appendChild(h1)

        const h3 = document.createElement('h3')
        h3.innerHTML = `Status: ${todoStatus}`
        box.appendChild(h3)

        const updateBtn = document.createElement('button')
        updateBtn.setAttribute('id', 'updateBtn')
        updateBtn.innerHTML = 'Update Status'
        box.appendChild(updateBtn)

        const removeBtn = document.createElement('button')
        removeBtn.setAttribute('id', 'removeBtn')
        removeBtn.innerHTML = 'Remove'
        box.appendChild(removeBtn)
    }
  return (
    <div className="container">
        <header>
            <input id="todoInput" type="text" />
            <button id="addBtn" onClick={addBtnHandler}>Add</button>
        </header>
        <div className="box">
            <h1><span id="todoNum">{todoNum}. </span>To Do List:</h1>
            <h3>Status: <span id="status">{todoStatus}</span></h3>
            <button id="updateBtn" onClick={updateBtnHandler}>Update Status</button>
            <button id="removeBtn" onClick={removeBtnHandler}>Remove</button>
        </div>
    </div>
  )
}

export default HomePage