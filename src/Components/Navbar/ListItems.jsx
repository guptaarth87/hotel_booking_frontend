import React from 'react';
import {HashLink as HLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './Navbar.css';

function ListItem({ items }) {
    items = [
      {
          "name":"About us",
          "nav":"/about"
      },
        {
           "name":"Booking",
           "nav":'#rooms',
        },
        {
          "name":"Gallery",
          "nav":'#gallery'
       },
       {
        "name":"Contact us",
        "nav":'#contactus'
     }
   
    ]
 
  return (
    <ul>
      {items.map((item, index) => (
        <li  className = "list_st" key={index}><HLink className='Link_dec alignCentre' to={item.nav}>{item.name}</HLink></li>
      ))}
      
         </ul>
  );
}

export default ListItem;
