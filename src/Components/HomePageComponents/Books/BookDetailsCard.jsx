import React, { useContext } from 'react'
import img from "../../../assets/quran.png"
import { useLoaderData, useParams } from 'react-router-dom';
import { DataContext } from '../../../Context/Context';

function BookDetailsCard() {
    const { bookId } = useParams();
    const books = useLoaderData();

    const expectedBook = books.find(data => data.bookId == bookId);

    const {handleMarkAsBook, handleAddToWishList} = useContext(DataContext);
  

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 py-10 md:p-16 md:mt-10'>

            {/* Image Section */}
            <div className='bg-gray-200 md:max-h-[500px] rounded-2xl flex justify-center items-center p-6'>
                <img
                    className='max-h-[260px] md:max-h-[400px] object-contain'
                    src={expectedBook.image}
                    alt={expectedBook.bookName}
                />
            </div>

            {/* Details Section */}
            <div className='flex flex-col gap-4'>

                {/* Title & Author */}
                <div>
                    <h1 className='text-2xl md:text-3xl font-bold'>
                        {expectedBook.bookName}
                    </h1>
                    <p className='mt-3'>By: {expectedBook.author} </p>
                </div>

                {/* Category */}
                <p className='border-t border-b py-3 border-gray-300'>
                    {expectedBook.category}
                </p>

                {/* Review */}
                <p>
                    <b>Review:</b> {expectedBook.review}
                </p>
                {/* tags  */}
                <div className='flex items-center gap-4 border-b border-gray-300 pb-4'>
                    <p>Tag</p>
                    {
                        expectedBook.tags.map((tag, inx) => (
                            <div key={inx} className="badge badge-soft badge-success">{tag} </div>
                        ))
                    }
                </div>
                {/* info  */}
                <div className='w-[300px] '>
                    <div className='space-y-2'>
                        <div className='flex'>
                            <span className='text-gray-500 w-[170px]'>Number of Pages:</span>
                            <span>{expectedBook.totalPages} </span>
                        </div>
                        <div className='flex'>
                            <span className='text-gray-500 w-[170px]'>Publisher:</span>
                            <span>{expectedBook.publisher}</span>
                        </div>
                        <div className='flex'>
                            <span className='text-gray-500 w-[170px]'>Publish of Year:</span>
                            <span>{expectedBook.yearOfPublishing} </span>
                        </div>
                        <div className='flex'>
                            <span className='text-gray-500 w-[170px]'>Rating:</span>
                            <span>{expectedBook.rating}</span>
                        </div>
                    </div>
                </div>

                {/* button  */}
                <div className='flex items-center gap-3 mt-3'>
                    <button onClick={()=>handleMarkAsBook(expectedBook)} className='py-1 px-3 border rounded cursor-pointer hover:bg-green-700 hover:text-white transition-all duration-300'>Mark As Read</button>
                    <button onClick={()=> handleAddToWishList(expectedBook)} className='py-1 px-3 border rounded cursor-pointer hover:bg-green-700 transition-all duration-300 text-white bg-green-500'>Wishlist</button>
                </div>
            </div>
        </div>
    )
}

export default BookDetailsCard