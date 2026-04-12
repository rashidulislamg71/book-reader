import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify';


const DataContext = createContext();
export { DataContext };


function ContextProvider({ children }) {
    const [readedBooks, setReadedBooks] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarkAsBook = (book) => {
        const isExistBook = readedBooks.find(data => data.bookId === book.bookId);
        const isExistWishList = wishList.find(data => data.bookId === book.bookId);
        if (isExistBook) {
            toast("This book is already readed!");
        }
        else if (isExistWishList) {

            toast("Book is already in your WishList!");
        }
        else {
            setReadedBooks([...readedBooks, book]);
            toast(`You successfully Added to Readed list ${book.bookName}.`);
        }
    };

    const handleAddToWishList = (book) => {
        const isExistReadBookList = readedBooks.find(data => data.bookId === book.bookId);
        const isExistWishList = wishList.find(data => data.bookId === book.bookId);
        if (isExistReadBookList || isExistWishList) {
            toast("Book is already in one of your lists!");
        }
        else {
            setWishList([...wishList, book]);
            toast(`You successfully Added to WishList ${book.bookName}.`);
        }
    }

    const data = {
        readedBooks,
        setReadedBooks,
        handleMarkAsBook,
        handleAddToWishList,
        wishList,
        setWishList
    }

    return <DataContext.Provider value={data}>
        {children}
    </DataContext.Provider>
}

export default ContextProvider;