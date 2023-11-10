import React from 'react'

import './SectionOne.css';
import { LandingpageData } from '../../DataConfigFile';

export default function SectionOne() {
  return (
    <>
    <div className="landing_background " id="SectionOne">
    <div className="overlay"></div>
       <video className="video_control" src={LandingpageData.video1} autoPlay muted loop />
       <div className="contentx">
            <h1>Welcome</h1>
            <h2>To Hotel Amar Shanti </h2>
        </div>
       </div>
    </>
  )
}
