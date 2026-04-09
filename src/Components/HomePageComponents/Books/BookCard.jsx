import React, { use } from 'react'
import img from "../../../assets/quran.png"
import { FiStar } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function BookCard({ book }) {
    const {bookId, bookName, author, image, rating, category, tags } = book

    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className='group cursor-pointer hover:shadow-xl duration-300 transition-all w-80 h-100 p-4 border border-gray-200 rounded-2xl flex flex-col gap-3  justify-between'>
                <div className='bg-gray-100 h-[60%] w-full overflow-hidden rounded-2xl flex justify-center items-center'>
                    <div className='w-[50%] flex justify-center'>
                        <img className='rounded transition  h-44 duration-300 group-hover:scale-105' src={image} alt="" />
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    {
                        tags.map((data, inx) => (
                            <li className='list-none' key={inx}>
                                <div className="badge badge-soft badge-success text-sm ">{data}</div>
                            </li>
                        ))
                    }
                </div>
                <div>
                    <div>
                        <h3 className='text-gray-700 font-bold text-[18px] mb-2 '>{bookName}</h3>
                        <p className='text-gray-700' >By: {author} </p>
                    </div>
                </div>
                <div className='pt-2 w-full border-t border-gray-300 flex justify-between items-center' >

                    <p>{category} </p>

                    <div className='flex justify-between items-center gap-1'>
                        <p className='text-gray-500'>{rating}</p>
                        <FiStar className='text-orange-300' />
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default BookCard