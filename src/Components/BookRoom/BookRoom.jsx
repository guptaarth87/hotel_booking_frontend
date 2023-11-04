import React,{useState} from 'react'
import booking from './booking.svg'
import { useLocation, useNavigate  } from "react-router-dom";
import { API_URL } from '../../Config';
import axios from 'axios'

export default function BookRoom() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const TypeOfRoom = searchParams.get('type_of_room');
  const Price = searchParams.get('price');
  const Checkindate = searchParams.get('check_in_date');
  const Checkoutdate = searchParams.get('check_out_date');
  const Rooms = searchParams.get('no_of_rooms');
  let Amount = Rooms *Price  ; 
  Amount = Amount + (Amount*.12)
  

  const [formData, setFormData] = useState({
    name_: '',
    phone_no: '',
  });

 const  handleChange=(e)=>{
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  const handleBooking =async ()=>{
     const BookingData={
      name:formData.name_,
      phone_no : formData.phone_no,
      check_in_date : Checkindate,
      check_out_date : Checkoutdate,
      no_of_rooms : Rooms,
      type_of_room : TypeOfRoom,
      amount : Amount
     }
     try {
      const response = await axios.post(`${API_URL}addbooking`,BookingData);
      console.log(response.data);
      alert(`${response.data.user.name} We will contact you soon for payment and booking confirmation`)
      navigate('/')
    } catch (error) {
      console.error('Error Adding Booking data', error);
    }

  }
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
                      <input type="text" class="form-control" id="inputFullname"
                      value={formData.name_}
                      name="name_"
                      onChange={handleChange}
                      />
                    </div>
                    <div class="col-12">
                      <label for="inputAddress" class="form-label">Phone Number</label>
                      <input type="text" class="form-control" id="inputPhonenumber" 
                      value={formData.phone_no}
                      name="phone_no"
                      onChange={handleChange}
                      />
                    </div>
                    <h5>Total Amount - {Amount}</h5>
                    <div class="col-12">
                        <button type="submit" class="btn background_clr" onClick={handleBooking}>Book room</button>
                      </div>
                    </div>
                  
                  </div>
                </div>
            </div>
        </div>
     
    </>
  )
}
