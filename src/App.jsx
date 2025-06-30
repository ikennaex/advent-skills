import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Pages/Homepage/Homepage'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import About from './Pages/About/About'
import WhyChooseUs from './Pages/WhyChooseUs/WhyChooseUsPage'
import WorkerApplication from './Pages/WorkerApplication/WorkerApplication'
import Workers from './Pages/Workers/Workers'
import WorkerDetails from './Pages/Workers/WorkerDetails'
import Admin from './Pages/Admin/Admin'
import PendingRequests from './Pages/Admin/PendingRequests'
import ApproveWorkers from './Pages/Admin/ApproveWorkers'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path= "/" element = {<Homepage />} />
        <Route path= "/about" element = {<About />} />
        <Route path= "/whychooseus" element = {<WhyChooseUs />} />
        <Route path= "/worker-application" element = {<WorkerApplication />} />
        <Route path= "/workers" element = {<Workers />} />
        <Route path= "/workers/:id" element = {<WorkerDetails />} />

        {/* ADMIN ROUTES  */}
        <Route path= "/admin" element = {<Admin />} />
        <Route path= "/admin/requests" element = {<PendingRequests />} />
        <Route path= "/approveworkers/:id" element = {<ApproveWorkers />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App