import React from 'react'
import booking from './booking.svg'

export default function BookRoom() {
  return (
    <>
    <div class="container">
        <div class="background-shadow-3d  m-4 p-4">
            <div class="row">
                <img class="col-lg-5" src={booking} />
                
               
                <div class="col-lg-6">
                <div class="row g-3" >
                    
                    <div class="col-md-12">
                      <label for="fullname" class="form-label">Full name</label>
                      <input type="text" class="form-control" id="inputFullname" />
                    </div>
                    <div class="col-12">
                      <label for="inputAddress" class="form-label">Phone Number</label>
                      <input type="text" class="form-control" id="inputPhonenumber" />
                    </div>
                   
                   
                    
                  
                   
                    <div class="col-12">
                        <button type="submit" class="btn background_clr">Book room</button>
                      </div>
                    </div>
                  
                  </div>
                </div>
            </div>
        </div>
     
    </>
  )
}
