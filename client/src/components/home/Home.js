import React from 'react'
import NavBar from '../navBar/NavBar'
import Main from '../main/Main'
import { Routes, Route } from 'react-router-dom'
function Home() {
  return (
    <Routes>
      <Route path="/main" element={<Main />}></Route>
    </Routes>

  )
}

export default Home