import React from 'react'
import img1 from '../../Assets/Galary/1.jpg';
import img2 from '../../Assets/Galary/2.jpg';
import img3 from '../../Assets/Galary/3.jpg';
import img4 from '../../Assets/Galary/4.jpg';
import img5 from '../../Assets/Galary/5.jpg';
import './Galary.css';

export default function Galary() {
  return (
    <>  
      <h2 className='alignCentre m-4 ' id="gallery">Gallery section</h2>
    <div className="row ">
     <img  className="col-lg-7 border-radius m-2 galary-img-height" src={img1} />
     <div className="col-lg-4 ">
        <div className="row">
        <img  className="col-lg-12 border-radius m-2 galary-img2-height" src={img2} />
        </div>
        <div className="row">
        <img  className="col-lg-12 border-radius m-2 galary-img2-height" src={img3} />
        </div>
     </div>
    </div>
    <div className="row">
    <img  className="col-lg-6 border-radius m-2 galary-img-height" src={img4} />
    <img  className="col-lg-5 border-radius m-2 galary-img-height" src={img5} />
    </div>
    </>

  )
}
