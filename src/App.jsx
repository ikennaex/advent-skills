import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Pages/Homepage/Homepage'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path= "/" element = {<Homepage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App