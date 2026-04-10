import React, { createContext, useState } from 'react'


const DataContext = createContext();
export { DataContext };


function ContextProvider({ children }) {
    const [readedBooks, setReadedBooks] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarkAsBook = (book) => {
        const isExistBook = readedBooks.find(data => data.bookId === book.bookId);
        if (isExistBook) {
            alert("This book is already readed!");
        }
        else {
            setReadedBooks([...readedBooks, book]);
            alert(`You successfully Added to Readed list ${book.bookName}.`)
        }
    };

    const handleAddToWishList = (book) => {
        const isExistReadBookList = readedBooks.find(data => data.bookId === book.bookId);
        if (isExistReadBookList) {
            alert(`"${book.bookName}" already have Readed list!`)
        }
        else {
            setWishList([...wishList, book]);
            alert(`You successfully Added to WishList "${book.bookName}".`);
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