import React, { useContext, useState } from 'react'
import { DataContext } from '../Context/Context'
import { FaBookOpen, FaCalendarAlt, FaFileSignature, FaStar, FaUserEdit } from 'react-icons/fa';

function ListedBooksPage() {
  const [toggleBtn, setToggleBtn] = useState("readList")

  const { readedBooks, wishList } = useContext(DataContext);
  const mapReadedBooks = readedBooks.map(book => book );
  const mapWishList = wishList.map(book => book);
  const activeList = toggleBtn === "readList" ? mapReadedBooks : mapWishList;

  // const sortReadedBooks = [...readedBooks].sort((a, b) => {

  const btnStyle = `bg-none px-3 rounded-2xl text-black pb-1 `
  const btnActiveStyle = `bg-blue-600 px-3 rounded-2xl text-white pb-1 `

  return (
    <div className='px-4 py-10 md:p-16'>
      {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
      {/* For TSX uncomment the commented types below */}
      <button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
        Button
      </button>

      <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
        popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>


      <div className=' rounded-2xl border w-fit m-auto'>
        <button onClick={() => setToggleBtn("readList")} className={`${toggleBtn === "readList" ? btnActiveStyle : btnStyle} cursor-pointer`}>Read List</button>
        <button onClick={() => setToggleBtn("wishList")} className={`${toggleBtn === "wishList" ? btnActiveStyle : btnStyle} cursor-pointer`} >Wish List</button>
      </div>

      {/* Books List Container */}
      <div className='max-w-5xl mx-auto flex flex-col gap-6'>
        {activeList.length === 0 ? (
          <div className="py-20 mt-10 flex flex-col items-center text-gray-400 bg-white rounded-3xl border-2 border-dashed border-gray-100">
            <FaFileSignature className='text-6xl mb-4 opacity-20' />
            <p className='text-lg font-medium'>No book in this list!</p>
          </div>
        ) : (
          activeList.map((book, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row items-center gap-6 bg-white p-5 rounded-2xl border border-gray-100 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300"
            >
              {/* 1. Image Section */}
              <div className="flex-shrink-0 overflow-hidden border-r pr-5">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-20 w-16 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* 2. Details Section */}
              <div className="flex-grow w-full">
                <div className='flex flex-wrap items-center gap-3 mb-2'>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-green-600 bg-green-50
                   px-2.5 py-1 rounded-full">
                    {book.category}
                  </span>
                  <div className='flex items-center gap-1 text-yellow-500 text-sm font-bold'>
                    <FaStar /> {book.rating}
                  </div>
                </div>

                <h2 className="text-base font-black text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                  {book.bookName}
                </h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 text-gray-600'>
                  <div className='text-sm mt-[-5px] '>
                    <span className='font-medium'>{book.author}</span>
                  </div>

                  <div className='flex items-center gap-2 text-sm md:text-base'>
                    <FaCalendarAlt className='text-green-400' />
                    <span className='font-medium'>Published: <span className='text-gray-900'>{book.yearOfPublishing || "2024"}</span></span>
                  </div>
                </div>

                {/* Action Buttons inside List */}
                <div className='mt-1 flex flex-wrap gap-3'>
                  <button className='flex items-center gap-2 bg-green-50 hover:bg-green-600 hover:text-white text-green-600 px-5 py-1 rounded-full text-sm font-bold transition-colors cursor-pointer'>
                    <FaBookOpen /> View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ListedBooksPage