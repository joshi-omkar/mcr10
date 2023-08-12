import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Sidebar from './components/Sidebar'
import Departments from './pages/Departments'
import Products from './pages/Products'

function App() {

  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path={'/'} exact element={<Dashboard/>} />
        <Route path={'/departments'} exact element={<Departments/>} />
        <Route path={'/products'} exact element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
