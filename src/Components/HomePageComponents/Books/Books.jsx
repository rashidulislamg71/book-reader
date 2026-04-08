import React from 'react'
import BookCard from './BookCard'

function Books() {
  return (
    <div className='px-4 md:px-10 py-10 md:py-15'>
      <h1 className='text-center text-3xl md:text-4xl font-bold mb-10 md:mb-15'>Books</h1>
 
      <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
           <BookCard />
         <BookCard />
         <BookCard />
      </div>

    </div>
  )
}

export default Books