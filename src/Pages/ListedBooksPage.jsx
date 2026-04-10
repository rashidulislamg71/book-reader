import React, { useContext, useState } from 'react'
import { DataContext } from '../Context/Context'

function ListedBooksPage() {
  const {readedBooks} = useContext(DataContext);


  

  return (
    <div>ListedBooksPage</div>
  )
}

export default ListedBooksPage