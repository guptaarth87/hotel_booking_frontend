import './Footer.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { BasicInfo } from '../../DataConfigFile';

function Footer(){
    return (
        <> 
        <div id = "contactus" className=" wrapbox w-100 py-4 flex-shrink-0">
     
     
        <div className="footercomponent ">
       
            <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="h1 white">{BasicInfo.name}</h5>
                    <p className="small white subhead">Best Room , Taxi & Food Services!</p>
                    <p className="small white mb-0">&copy; Copyrights. All rights reserved. Hotel Amar Shanti</p>
                </div>
                <div className="subdiv col-lg-7">
                <div className="row">
                <div className="col-lg-4 col-md-6">
                    <h5 className="mb-3 white">Quick links</h5>
                     <ul className="list-unstyled text-muted">
                        <li><HashLink className="link white" to="#rooms">Book Rooms</HashLink></li>
                        <li><HashLink className="link white" to="#facilities">Facilities</HashLink></li>
                        <li><HashLink className="link white" to="#SectionOne">Go to top</HashLink></li>
                        <li><Link className="link white" to="#contact">Contact</Link></li>
                    </ul>
                </div>
                
                <div className="col-lg-5 col-md-6 ">
                    <h5 className="mb-3 white">Contact info</h5>
                    <ul className="list-unstyled text-muted">
                    <li className='white'>Address : {BasicInfo.address}</li>
                        <li className='white'>Phone No : {BasicInfo.phone_no}</li>
                        
                        
                    </ul>
                </div>
               
               
                </div>
             </div>
            </div>
           
        </div>
       
         
        
    </div>
        
       
        
        </>
    )
}

export default Footer;