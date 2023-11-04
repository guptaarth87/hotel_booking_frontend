import React from 'react'
import BookRoom from '../Components/BookRoom/BookRoom'
import Footer2 from '../Components/Footer/Footer2'
import Note from '../Components/RoomDetails/Note'

export default function BookPage() {
  return (
    <>
    <h2 className='alignCentre mt-4'>Rooms available</h2><br></br><br></br>
   
     <BookRoom/>
     <Note/>
     <Footer2/>
    </>
  )
}
