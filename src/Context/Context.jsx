import React, { createContext, useState } from 'react'


const DataContext = createContext();
export { DataContext };


function ContextProvider({ children }) {
    const [readedBook, setReadedBook] = useState([]);
    const [listedBook, setListedBook] = useState([]);
    console.log(readedBook)

    const handleMarkAsBook = (book) => {
        const isExistBook = readedBook.find(data => data.bookId === book.bookId);
        if (isExistBook) {
            alert("This book is already readed!");
        }
        else {
            setReadedBook([...readedBook, book]);
        }
    };

    

    const data = {
        readedBook,
        setReadedBook,
        handleMarkAsBook,
    }

    return <DataContext.Provider value={data}>
        {children}
    </DataContext.Provider>
}

export default ContextProvider;