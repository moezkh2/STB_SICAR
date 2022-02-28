import React from 'react'
import NavBar from '../navBar/NavBar'
import { Routes, Route } from 'react-router-dom'
function Home() {
  return (
    <Routes>
      <Route path="/NavBar" element={<NavBar></NavBar>} />
    </Routes>

  )
}

export default Home