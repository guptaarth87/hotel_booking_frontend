import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import SectionOne from '../Components/SectionOne/SectionOne'
import Facilities from '../Components/Facilities/Facilities'

import Footer from '../Components/Footer/Footer'
import Gallery from '../Components/Landing/Gallery'
import Bookrooms from '../Components/Landing/Bookrooms'

export default function LandingPage() {
  return (
   <>
   <Navbar/>
   <  SectionOne/>
   <div className="container">
   <Bookrooms/>
   </div>
   
   <Facilities/>
   <div className="container">
    <Gallery/>
   </div>
   <Footer/>
   </>
  )
}
