import React from 'react'
import { rooms_data } from '../../DataConfigFile'
import './Rooms.css'
import {Link} from 'react-router-dom';

export default function Rooms() {
  return (
      <> 
      <div id ="rooms"></div>
      <h2 className='alignCentre mt-4'>Book Rooms</h2>
      <div className="row p-4">
        {
            rooms_data.map((items, keys)=>{
                return(
                    <div className=" col-lg-4 p-2">
                          <img className="card-img height_img mt-3" src={items.img_url} />
                          <h4 className="alignCentre mt-2">{items.type_of_room}     </h4>
                          {/* <h5 className="">Price - {items.price}/-</h5> */}
                          <p className='description'>{items.tag_line}</p>
                          <div className="btnCentre">
                          <Link className="btn background_clr "
                          to={{ 
                            pathname: '/roomdetails', 
                            search: `?type_of_room=${items.type_of_room}` 
                        }}
                          >Book Now</Link>
                          </div>
                    </div> 
                )
            })
        }
     
      </div>
         
      </>
  )
}
