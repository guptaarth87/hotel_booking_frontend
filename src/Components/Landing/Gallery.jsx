import React from 'react';
import img2 from '../../Assets/landing/delux_ac.jpg';
import { Link } from 'react-router-dom';
import "./Landing.css"

export default function Gallery() {
  return (
    <>
      <h2 className='alignCentre mt-4'>Gallary</h2>
    <br></br>
    <div className="row">
    <img src={img2} className="img-control col-lg-5" />
    <div className="col-lg-5 description">
        <h3>Events and Images</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veniam praesentium architecto impedit dolor repudiandae, et, <br></br><br></br> excepturi beatae debitis sint, rerum consectetur distinctio ut nisi! Possimus autem quis voluptates aliquam fugit dignissimos reprehenderit delectus magnam.
        <br></br>
        <br></br>
    <Link to='/gallery' className='btn background_clr'>Visit Gallary</Link>
      </div>
   
    </div>
    </>
  
  )
}
