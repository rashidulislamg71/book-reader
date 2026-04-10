import React, { useContext, useState } from 'react'
import { DataContext } from '../Context/Context'

function ListedBooksPage() {
  const [toggleBtn, setToggleBtn] = useState("readList")

  const { readedBooks, wishList } = useContext(DataContext);

  const btnStyle = `bg-none px-3 rounded-2xl text-black pb-1 `
  const btnActiveStyle = `bg-blue-600 px-3 rounded-2xl text-white pb-1 `

  return (
    <div>
      <div className=' rounded-2xl border w-fit m-auto'>
        <button onClick={() => setToggleBtn("readList")} className={`${toggleBtn === "readList" ? btnActiveStyle : btnStyle} cursor-pointer`}>Success</button>
        <button onClick={() => setToggleBtn("wishList")} className={`${toggleBtn === "wishList" ? btnActiveStyle : btnStyle} cursor-pointer`} >Success</button>
      </div>
    </div>
  )
}

export default ListedBooksPage