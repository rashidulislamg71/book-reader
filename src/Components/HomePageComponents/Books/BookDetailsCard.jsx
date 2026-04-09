import React from 'react'
import img from "../../../assets/quran.png"

function BookDetailsCard() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 py-10 md:p-16'>

            {/* Image Section */}
            <div className='bg-gray-200 rounded-2xl flex justify-center items-center p-6'>
                <img
                    className='max-h-[400px] object-contain'
                    src={img}
                    alt="The Holy Quran"
                />
            </div>

            {/* Details Section */}
            <div className='flex flex-col gap-4'>

                {/* Title & Author */}
                <div>
                    <h1 className='text-2xl md:text-3xl font-bold'>
                        The Holy Quran
                    </h1>
                    <p className='mt-3'>By: Allah</p>
                </div>

                {/* Category */}
                <p className='border-t border-b py-3 border-gray-300'>
                    Religious Book
                </p>

                {/* Review */}
                <p>
                    <b>Review:</b> The Quran is the holy book of Islam. It provides complete guidance for human life, including moral, spiritual, and social aspects.
                </p>
                {/* tags  */}
                <div className='flex items-center gap-4 border-b border-gray-300 pb-4'>
                    <p>Tag</p>
                    <div className="badge badge-soft badge-success">Success</div>
                    <div className="badge badge-soft badge-success">Success</div>
                </div>
                {/* info  */}
                <div className='w-[300px] '>
                    <div className='space-y-2'>
                        <div className='flex'>
                            <span className='text-gray-500 w-[170px]'>Number of Pages:</span>
                            <span>604</span>
                        </div>
                        <div className='flex'>
                            <span className='text-gray-500 w-[170px]'>Publisher:</span>
                            <span>Islamic Foundation</span>
                        </div>
                        <div className='flex'>
                            <span className='text-gray-500 w-[170px]'>Publish of Year:</span>
                            <span>2024</span>
                        </div>
                        <div className='flex'>
                            <span className='text-gray-500 w-[170px]'>Rating:</span>
                            <span>5.0</span>
                        </div>
                    </div>
                </div>

                {/* button  */}
                <div className='flex items-center gap-3 mt-3'>
                    <button className='py-1 px-3 border rounded cursor-pointer hover:bg-green-700 transition-all duration-300'>Read</button>
                    <button className='py-1 px-3 border rounded cursor-pointer hover:bg-green-700 transition-all duration-300 text-white bg-green-500'>Wishlist</button>
                </div>
            </div>
        </div>
    )
}

export default BookDetailsCard