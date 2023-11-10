import React from 'react';
import img2 from '../../Assets/landing/delux_ac.jpg';
import { Link } from 'react-router-dom';
import "./Landing.css"
import { LandingpageData } from '../../DataConfigFile';

export default function Gallery() {
  return (
    <>
      <h2 className='alignCentre mt-4'>Gallary</h2>
    <br></br>
    <div className="row">
    <img src={LandingpageData.gallary_section_img} className="img-control col-lg-5" />
    <div className="col-lg-5 description">
        <h3>Events and Images</h3>
       {LandingpageData.gallary_section_data1}
       <br></br><br></br>
       {LandingpageData.gallary_section_data2}
        <br></br>
        <br></br>
    <Link to='/gallery' className='btn background_clr'>Visit Gallary</Link>
      </div>
   
    </div>
    </>
  
  )
}
