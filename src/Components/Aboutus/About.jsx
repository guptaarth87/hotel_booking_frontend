import React from 'react'
import img1 from '../../Assets/about/1.jpg';

import { Aboutus } from '../../DataConfigFile';
import { BasicInfo } from '../../DataConfigFile';

import './About.css';

export default function About() {
  return (
    <>
     <div className="row mt-5">
     <div className="col-lg-6">
        <h3 >People At The Heart Of Our Business</h3>
        <br></br>
        <div className="description">
       {Aboutus.div1_content}
       <br></br>
      <br></br>
      {Aboutus.div2_content}
      </div>
      </div>
     <img src={img1} className="img-control-about col-lg-5" />
     </div>
     <br></br>
     <br></br>
     <div className="row">
      <div className="col-lg-12 col-sm-12 subheading">
        {Aboutus.div3_content}{BasicInfo.phone_no}.
        <br></br>
        
        {Aboutus.div4_content}
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
