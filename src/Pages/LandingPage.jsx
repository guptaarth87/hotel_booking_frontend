import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import SectionOne from '../Components/SectionOne/SectionOne'
import Rooms from '../Components/Rooms/Rooms'
import Facilities from '../Components/Facilities/Facilities'
import Galary from '../Components/Galary/Galary'
import Footer from '../Components/Footer/Footer'

export default function LandingPage() {
  return (
   <>
   <Navbar/>
   <  SectionOne/>
   <div className="container">
   <Rooms/>
   </div>
   <Facilities/>
   <div className="container">
    <Galary/>
   </div>
   <Footer/>
   </>
  )
}
