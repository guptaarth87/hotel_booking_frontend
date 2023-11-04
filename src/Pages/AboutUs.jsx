import React from 'react'
import About from '../Components/Aboutus/About'
import Footer2 from '../Components/Footer/Footer2'
import Header from '../Components/Navbar/Header'

export default function AboutUs() {
  return (
    <>
    <Header/>
     <h2 className='alignCentre mt-4'>About us</h2>
     <div className="container">
     <About/>
     </div>
   <Footer2/>
    </>
  )
}
