import React from 'react'
import Herosection from '../../Components/Herosection/Herosection'
import PopularWorkCategories from '../../Components/PopularCategories/PopularWorkCategories'
import TopStaff from '../../Components/Topstaff/TopStaff'
import Testimonial from '../../Components/Testimonials/Testimonial'

const Homepage = () => {
  return (
    <div>
        <Herosection />
        <PopularWorkCategories />
        <TopStaff />
        <Testimonial />
    </div>
  )
}

export default Homepage