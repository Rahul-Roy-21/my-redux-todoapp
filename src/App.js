import React from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todolist from './components/Todolist'
import TodoStats from './components/TodoStats'

const App = () => {
  return (
    <div className='todoapp p-4 mx-auto mt-2'>
      <h1>My Todo List</h1>
      <hr />
      <AddTodo />
      <Todolist />
      <TodoStats />
    </div>
  )
}

export default App
