import { createContext, useContext, useState } from 'react';

import ListBook from "./components/ListBook";
import RegisterBook from "./components/RegisterBook";


const BookContext = createContext();

function ContainerV2()
{
    
    //==============================================================================================
    //SHARED BY BOTH LIST-BOOK AND REGISTER-BOOK
    let [book, setBook] = useState({
        bookId : '',
        bookName : '',
        bookPrice : ''
    });
    let [bookList, setBookList] = useState([]);
    //===============================================================================================
    return (

         <div>
            <BookContext.Provider value = { {book, bookList, setBook, setBookList} }>

                <RegisterBook/>

                <hr/>
                <br/>

                <ListBook/>

            </BookContext.Provider>
         </div>
    )
    

}

export { ContainerV2, BookContext };