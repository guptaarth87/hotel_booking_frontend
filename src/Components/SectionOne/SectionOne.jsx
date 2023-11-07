import React from 'react'
import landing_video from './landing_video1.mp4'
import './SectionOne.css';

export default function SectionOne() {
  return (
    <>
    <div className="landing_background " id="SectionOne">
    <div className="overlay"></div>
       <video className="video_control" src={landing_video} autoPlay muted loop />
       <div className="contentx">
            <h1>Welcome</h1>
            <h2>To Hotel Amar Shanti </h2>
        </div>
       </div>
    </>
  )
}
