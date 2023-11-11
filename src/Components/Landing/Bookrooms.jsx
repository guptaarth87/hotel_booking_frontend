import React from 'react'
import "./Landing.css";
import { Link } from 'react-router-dom';
import { LandingpageData } from '../../DataConfigFile';

export default function Bookrooms() {
  return (
    <>
    <h2 className='alignCentre mt-4'>Rooms</h2>
    <br></br>
    <div className="row">
    <div className="col-lg-5 description">
        <h3>Rooms and Services</h3>
        {LandingpageData.room_section_data1}
        <br></br>
        <br></br>
        {LandingpageData.room_section_data2}
        <br></br>
        <br></br>
    <Link to='/rooms' className='btn background_clr'>Book rooms</Link>
      </div>
     <img src={LandingpageData.room_section_img} className="col-lg-5 img-control m-1" />
    </div>
    </>

  )
}
