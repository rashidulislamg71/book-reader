import React from 'react'
import img from "../../../assets/quran.png"
import { FiStar } from 'react-icons/fi'

function BookCard() {
    return (
        <div className=' '>
            <div className='group cursor-pointer hover:shadow-xl duration-300 transition-all w-80 h-100 p-4 border border-gray-200 rounded-2xl flex flex-col gap-3  justify-between'>
                <div className='bg-gray-100 h-[60%] w-full overflow-hidden rounded-2xl flex justify-center items-center'>
                    <div className='w-[50%] '>
                        <img className='rounded-2xl transition duration-300 group-hover:scale-105' src={img} alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className='text-gray-700 font-bold text-2xl'>The Name of Book</h3>
                        <p className='text-gray-700' >By: Name of Writer</p>
                    </div>
                </div>
                <div className='pt-2 w-full border-t border-gray-300 flex justify-between items-center' >
                    <p className='text-gray-400'>Which type is book</p>
                    <div className='flex justify-between items-center gap-1'>
                        <p className='text-gray-500'>5.00</p>
                        <FiStar className='text-orange-300' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard