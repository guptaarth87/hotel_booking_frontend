import React from 'react'
import BookRoom from '../Components/BookRoom/BookRoom'

export default function BookPage() {
  return (
    <>
    <h2 className='alignCentre mt-4'>Rooms available</h2><br></br><br></br>
    <h5 className='description alignCentre'>Enter details to book</h5>
     <BookRoom/>
    </>
  )
}
