import React from 'react'
import { Home } from './pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import { User } from './pages/User'
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='user/:user' element={<User />}>
          <Route path='savings' element={<p>savigs</p>}/>
          <Route path='expenses' element={<p>expenses</p>}/>
        </Route>
        <Route path='*' element={<Navigate to='/'/>} />
      </Routes>
    </div>
  )
}

export default App
