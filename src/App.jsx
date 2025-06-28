import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Pages/Homepage/Homepage'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import About from './Pages/About/About'
import WhyChooseUs from './Pages/WhyChooseUs/WhyChooseUsPage'
import WorkerApplication from './Pages/WorkerApplication/WorkerApplication'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path= "/" element = {<Homepage />} />
        <Route path= "/about" element = {<About />} />
        <Route path= "/whychooseus" element = {<WhyChooseUs />} />
        <Route path= "/worker-application" element = {<WorkerApplication />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App