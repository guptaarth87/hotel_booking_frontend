import React from 'react'
import './Facilities.css'

export default function Facilities() {
    const facilityList = [
        {    'id':0,
              'name':"wifi",
             'img_url':"https://img.icons8.com/color/48/wifi--v1.png"
        },
        {    'id':1,
              "name":"taxi service",
             'img_url':"https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/external-taxi-taxi-service-itim2101-lineal-color-itim2101-4.png"
        },
        {    'id':2,
              "name":"pure veg jain food",
             'img_url':"https://img.icons8.com/color/48/spirulina.png"
        },
        {    'id':3,
             "name":"hygine and clean environment",
             'img_url':"https://img.icons8.com/color/48/cleaning-service.png"
        },
        {    'id':4,
              "name":"service assistance",
             'img_url':"https://img.icons8.com/color/48/rich.png"
        },
        {    'id':5,
              'name':"wifi",
             'img_url':"https://img.icons8.com/color/48/wifi--v1.png"
        },
        {    'id':6,
              "name":"taxi service",
             'img_url':"https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/external-taxi-taxi-service-itim2101-lineal-color-itim2101-4.png"
        },
        {    'id':7,
              "name":"pure veg jain food",
             'img_url':"https://img.icons8.com/color/48/spirulina.png"
        },
        {    'id':8,
             "name":"hygine and clean environment",
             'img_url':"https://img.icons8.com/color/48/cleaning-service.png"
        },
        {    'id':9,
              "name":"service assistance",
             'img_url':"https://img.icons8.com/color/48/rich.png"
        },
        {    'id':10,
              'name':"wifi",
             'img_url':"https://img.icons8.com/color/48/wifi--v1.png"
        },
        {    'id':11,
              "name":"taxi service",
             'img_url':"https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/external-taxi-taxi-service-itim2101-lineal-color-itim2101-4.png"
        },
        {    'id':12,
              "name":"pure veg jain food",
             'img_url':"https://img.icons8.com/color/48/spirulina.png"
        },
        {    'id':13,
             "name":"hygine and clean environment",
             'img_url':"https://img.icons8.com/color/48/cleaning-service.png"
        },
        {    'id':14,
              "name":"service assistance",
             'img_url':"https://img.icons8.com/color/48/rich.png"
        },
       
       ];
  return (
    <>
  <div id="facilities"></div>
  <div  >
    <br></br>
  <h2 className='alignCentre mt-4'>Available facilities</h2>
      <div className="slider">
        <div className="slide-track">
            
          {   
              facilityList.map((items,key)=>{
               console.log(items.img_url)
               
               return( 
               <>
                <div className = "  slide">
                 <div className="card_div card p-2">
                    <img className=" col-2 expertImg " src={items.img_url}/>
                   <br></br> <h5 >{items.name}</h5>
               </div> 
            </div>
               </>
               )

              })
          }
     
        </div>
    </div>   

    <div className="slider">
        <div className="slide-track-reverse">
            
          {
              facilityList.map((items,key)=>{
               console.log(items.img_url)
               return( 
               <>
                <div className = "slide">
                 <div className="card_div card p-2">
                    
                 <img className=" col-2 expertImg " src={items.img_url}/>
                   <br></br> <h5 >{items.name}</h5>
                    
               </div> 
            </div>
               </>
               )
              })
          }
        </div>
    </div>  
    </div>
    </>
  )
}
