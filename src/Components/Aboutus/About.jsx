import React from 'react'
import img1 from '../../Assets/about/1.jpg';
import img2 from '../../Assets/about/2.jpg';

export default function About() {
  return (
    <>
     <div className="row mt-5">
     <div className="col-lg-5 description">
        <h3>People at the heart of our business</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veniam praesentium architecto impedit dolor repudiandae, et, <br></br><br></br> excepturi beatae debitis sint, rerum consectetur distinctio ut nisi! Possimus autem quis voluptates aliquam fugit dignissimos reprehenderit delectus magnam.
      </div>
     <img src={img2} className="img-control col-lg-5" />
      
      
     </div>
     <div className="row mt-4">
      <img src={img1} className="img-control col-lg-5" />
      
      <div className="col-lg-5 description">
        <h3 className='mt-2'>Our way of being</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br><br></br>Repellat veniam praesentium architecto impedit dolor repudiandae, et, excepturi beatae debitis sint, rerum consectetur distinctio ut nisi! Possimus autem quis voluptates aliquam fugit dignissimos reprehenderit delectus magnam.
      </div>
     </div>
    
    </>
  )
}
