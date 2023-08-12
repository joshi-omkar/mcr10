import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path={'/'} exact element={<Dashboard/>} />
      </Routes>
    </div>
  )
}

export default App
