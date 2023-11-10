import React from 'react'
import img1 from '../../Assets/landing/executive_sofa.jpg';
import "./Landing.css";
import { Link } from 'react-router-dom';

export default function Bookrooms() {
  return (
    <>
    <h2 className='alignCentre mt-4'>Rooms</h2>
    <br></br>
    <div className="row">
    <div className="col-lg-5 description">
        <h3>Rooms and Services</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veniam praesentium architecto impedit dolor repudiandae, et, <br></br><br></br> excepturi beatae debitis sint, rerum consectetur distinctio ut nisi! Possimus autem quis voluptates aliquam fugit dignissimos reprehenderit delectus magnam.
        <br></br>
        <br></br>
    <Link to='/rooms' className='btn background_clr'>Book rooms</Link>
      </div>
     <img src={img1} className="col-lg-5 img-control" />
    </div>
    </>

  )
}
