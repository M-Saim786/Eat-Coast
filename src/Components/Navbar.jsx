import React from 'react'
import Login from './Login'
import Home from './Home'
import { Routes , Route } from 'react-router-dom'
export default function Navbar() {
  return (
<>
<Routes>
    <Route path='/' element={<Login />} />
    <Route path='/home' element={<Home />} />
</Routes>

</>
    )
}
