import React from 'react'
import AddToDo from './components/AddToDo'
import Todos from './components/Todos'
import Navbar from './components/Navbar'
import './App.css'

const App = () => {
  return (
    <div>
      <main>
        <h1>TODO REACT + TYPESCRIPT</h1>
        <Navbar />
        <AddToDo />
        <Todos />
      </main>
    </div>
  )
}

export default App