import React from 'react'
import note from './note.svg'
import './RoomDetails.css'

export default function Note() {
  return (
    <>
    <div className="container mt-3">
            <div className="card p-4 ">
            <h4 className='alignCentre'>Note that - </h4>
        <div className="row">
           <img src={note} className="col-lg-5 img_control_hidden" /> 
          <div className="col-lg-6">
             
        <div>1. Booking of the room will be confirmed after payment of at least 50% of the total amount.</div>
        <hr></hr>
        <div>2. Check-out time of room is 24 hours</div>
        <hr></hr>
        <div>3. Don’t forget to carry your Identity (Linke Aadhaar card, pan card etc)</div>
        <hr></hr>
        <div>4.There are extra charges for extra bed that is 500/-</div>
        <hr></hr>
        <div>5. There are extra charges for extra bed that is 500/-</div>
          </div>
        </div>
        
    </div>
    </div>

    </>
  )
}
