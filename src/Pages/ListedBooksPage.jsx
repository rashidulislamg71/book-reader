import React, { useContext, useState } from 'react'
import { DataContext } from '../Context/Context'
import { FaBookOpen, FaCalendarAlt, FaFileSignature, FaStar } from 'react-icons/fa';

function ListedBooksPage() {
  const [toggleBtn, setToggleBtn] = useState("readList");
  const [sortedList, setSortedList] = useState([]);

  const { readedBooks, wishList } = useContext(DataContext);

  // Decide which list to show
  const baseList = toggleBtn === "readList" ? readedBooks : wishList;

  // If sortedList has data, use it, otherwise use baseList
  const activeList = sortedList.length > 0 ? sortedList : baseList;

  // Sorting function
  const sortBooks = (type) => {
    let sorted;

    if (type === "pages") {
      sorted = [...baseList].sort((a, b) => a.totalPages - b.totalPages);
    } else if (type === "rating") {
      sorted = [...baseList].sort((a, b) => b.rating - a.rating);
    }

    setSortedList(sorted);
  };

  // Reset when switching tabs
  const handleToggle = (type) => {
    setToggleBtn(type);
    setSortedList([]);
  };

  const btnStyle = `bg-none px-3 rounded-2xl text-black pb-1`;
  const btnActiveStyle = `bg-blue-600 px-3 rounded-2xl text-white pb-1`;

  return (
    <div className='px-4 py-10 md:p-16'>

      {/* Dropdown */}
      <button
        className="btn"
        popoverTarget="popover-1"
        style={{ anchorName: "--anchor-1" }}
      >
        Sort By: {sortedList.length > 0 ? (sortedList[0].totalPages ? "Pages" : "Rating") : "None"}
      </button>

      <ul
        className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
        popover="auto"
        id="popover-1"
        style={{ positionAnchor: "--anchor-1" }}
      >
        <li onClick={() => sortBooks("pages")}><a>Sort by Pages</a></li>
        <li onClick={() => sortBooks("rating")}><a>Sort by Rating</a></li>
      </ul>

      {/* Toggle Buttons */}
      <div className='rounded-2xl border w-fit m-auto mt-6'>
        <button
          onClick={() => handleToggle("readList")}
          className={`${toggleBtn === "readList" ? btnActiveStyle : btnStyle} cursor-pointer`}
        >
          Read List
        </button>

        <button
          onClick={() => handleToggle("wishList")}
          className={`${toggleBtn === "wishList" ? btnActiveStyle : btnStyle} cursor-pointer`}
        >
          Wish List
        </button>
      </div>

      {/* Books List */}
      <div className='max-w-5xl mx-auto flex flex-col gap-6 mt-8'>
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
              {/* Image */}
              <div className="flex-shrink-0 overflow-hidden border-r pr-5">
                <img
                  src={book.image}
                  alt={book.bookName}
                  className="h-20 w-16 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Details */}
              <div className="flex-grow w-full">
                <div className='flex flex-wrap items-center gap-3 mb-2'>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
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
                  <div className='text-sm'>
                    <span className='font-medium'>{book.author}</span>
                  </div>

                  <div className='flex items-center gap-2 text-sm md:text-base'>
                    <FaCalendarAlt className='text-green-400' />
                    <span className='font-medium'>
                      Published:{" "}
                      <span className='text-gray-900'>
                        {book.yearOfPublishing || "2024"}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Action */}
                <div className='mt-2 flex flex-wrap gap-3'>
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

export default ListedBooksPage;