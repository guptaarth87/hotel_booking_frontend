import React from 'react'
import BookRoom from '../Components/BookRoom/BookRoom'
import Footer2 from '../Components/Footer/Footer2'
import Note from '../Components/RoomDetails/Note'
import Header from '../Components/Navbar/Header'

export default function BookPage() {
  return (
    <>
    <Header/>
    <h2 className='alignCentre mt-4'>Rooms available</h2><br></br><br></br>
   
     <BookRoom/>
     <Note/>
     <Footer2/>
    </>
  )
}
