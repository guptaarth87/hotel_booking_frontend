import React from 'react'
import img1 from '../../Assets/about/1.jpg';

import { Aboutus } from '../../DataConfigFile';
import { BasicInfo } from '../../DataConfigFile';

import './About.css';

export default function About() {
  return (
    <>
     <div className="row mt-5">
     <div className="col-lg-5 description">
        <h3>People at the heart of our business</h3>
       {Aboutus.div1_content}
      </div>
     <img src={img1} className="img-control col-lg-5" />
     </div>
     <br></br>
     <br></br>
     <div className="row">
      <div className="col-lg-10 col-sm-12 description">
        {Aboutus.div2_content}{BasicInfo.phone_no}
        <br></br>
        <br></br>
        {Aboutus.div3_content}
      </div>
     </div>
     <br></br>
     <br></br>
     <div className="row ">
     <img  className="col-lg-7 border-radius m-2 galary-img-height" src={Aboutus.img1} />
     <div className="col-lg-4 ">
        <div className="row">
        <img  className="col-lg-12 border-radius m-2 galary-img2-height" src={Aboutus.img2} />
        </div>
        <div className="row">
        <img  className="col-lg-12 border-radius m-2 galary-img2-height" src={Aboutus.img3} />
        </div>
     </div>
    </div>
    
    </>
  )
}
