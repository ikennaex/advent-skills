import React from 'react'
import Herosection from '../../Components/Herosection/Herosection'
import PopularWorkCategories from '../../Components/PopularCategories/PopularWorkCategories'
import TopStaff from '../../Components/Topstaff/TopStaff'
import Testimonial from '../../Components/Testimonials/Testimonial'
import Services from '../../Components/Services/Services'
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs'
import ForClients from '../../Components/ForClients/ForClients'
import ForWorkers from '../../Components/ForWorker/ForWorker'

const Homepage = () => {
  return (
    <div>
        <Herosection />
        <PopularWorkCategories />
        <Services />
        <WhyChooseUs />
        <TopStaff />
        <ForClients />
        <ForWorkers />
        <Testimonial />
    </div>
  )
}

export default Homepage