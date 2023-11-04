import React, { useState }  from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import check from './check.svg'

export default function Check() {
    const [checkindate, setcheckinDate] = useState("01-12-2023");
    const [checkoutdate, setcheckoutDate] = useState("01-12-2023");
    const [rooms , setRooms] = useState();
    const [checkinButton, setcheckinButton] = useState(false);
    const [checkoutButton, setcheckoutButton] = useState(false);

    const onChangeCheckin = (newDate) => {
        setcheckoutButton(false);
        if (moment(newDate, 'YYYY-MM-DD', true).isValid()) {
            setcheckoutButton(false);
            const formatted = moment(newDate).format('DD-MM-YYYY');
            console.log(formatted);
            
            // setFormattedDate(formatted);
            setcheckinDate(formatted);
            setcheckinButton(false);
          } else {
            console.error('Invalid date:', newDate);
            setcheckinButton(false);
          }
     
    };

    const handleRooms =(e) =>{
            setRooms(e.target.value);
            console.log(e.target.value);
    }
  
    const onChangeCheckout= (newDate) => {
        if (moment(newDate, 'YYYY-MM-DD', true).isValid()) {
            setcheckinButton(false);
            const formatted = moment(newDate).format('DD-MM-YYYY');
            console.log(formatted);
            
            // setFormattedDate(formatted);
            setcheckoutDate(formatted);
            setcheckoutButton(false);
          } else {
            console.error('Invalid date:', newDate);
            setcheckoutButton(false);
          }
      };

  return (
  
  <>
  <div className="container">
    <div className="row">
    <img  className ="col-lg-6 mt-5 " src={check} />
    <div className="col-1"></div>
    <div className="card col-lg-4 p-3 " style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
    <h3 className='alignCentre'>Check Availability</h3>
   <h5>Check in Date - {checkindate}</h5>
   <button className='btn background_clr col-4' onClick={()=>setcheckinButton(true)}>Check in date</button>
   {
    checkinButton?
    <div style={{ display: 'flex', justifyContent: 'center' , marginTop: '50px'}}>
    <Calendar onChange={onChangeCheckin} value={checkindate} />
   
  </div>
  :
  <></>
   }
   <hr></hr>
   <h5>Check out Date - {checkoutdate}</h5>
   <button className='btn background_clr col-4' onClick={()=>setcheckoutButton(true)}>Check out date</button>
   {
       checkoutButton?
       <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
         <Calendar onChange={onChangeCheckout} value={checkoutdate} />
       </div>:
       <></>
   }
   <hr></hr>
   <h5 >Enter No of rooms (1 to 5)</h5>
   <select id="inputState" class="form-control" value={rooms} onChange={handleRooms}>
        <option selected>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
      </select>
 
   <button className='btn background_clr col-5 mt-2'>Check Availability</button>
    </div>

 
    </div>
  
  
  </div>
   
  
  </>
   

  )
}
