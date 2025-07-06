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
import Chef from './Pages/Chef/Chef'
import Nanny from './Pages/Nanny/Nanny'
import Driver from './Pages/Driver/Driver'
import ProfessionalMaid from './Pages/ProfessionalMaid/ProfessionalMaid'
import Caregiver from './Pages/Caregiver/Caregiver'
import Tutor from './Pages/Tutor/Tutor'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />

      <main className='flex-grow'>
      <Routes>
        <Route path= "/" element = {<Homepage />} />
        <Route path= "/about" element = {<About />} />
        <Route path= "/whychooseus" element = {<WhyChooseUs />} />
        <Route path= "/worker-application" element = {<WorkerApplication />} />
        <Route path= "/workers" element = {<Workers />} />
        <Route path= "/chef" element = {<Chef />} />
        <Route path= "/nanny" element = {<Nanny />} />
        <Route path= "/driver" element = {<Driver />} />
        <Route path= "/professionalmaid" element = {<ProfessionalMaid />} />
        <Route path= "/caregiver" element = {<Caregiver />} />
        <Route path= "/tutor" element = {<Tutor />} />

        {/* ADMIN ROUTES  */}
        <Route path= "/admin" element = {<Admin />} />
        <Route path= "/admin/requests" element = {<PendingRequests />} />
        <Route path= "/approveworkers/:id" element = {<ApproveWorkers />} />
      </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App