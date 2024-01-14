import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import SectionOne from '../Components/SectionOne/SectionOne'
import Facilities from '../Components/Facilities/Facilities'

import Footer from '../Components/Footer/Footer'
import Gallery from '../Components/Landing/Gallery'
import Bookrooms from '../Components/Landing/Bookrooms'
import { API_URL } from '../Config'
import axios from 'axios';

export default function LandingPage() {

  // const Api_req=async ()=>{
  //   try{
  //     const response = await axios.get(`{API_URL}`)
  //   }catch(err){
  //     console.log(err)
  //   }
  // }
  useEffect(() => {
    const Api_req = async () => {
      try {
        const response = await axios.get(`{API_URL}`);
        console.log(response);
        // Handle the response if needed
      } catch (err) {
        console.error(err);
      }
    };

    // Call Api_req when the component is mounted
    Api_req();

    // Optionally, you can return a cleanup function if needed
   
  }, []);
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
