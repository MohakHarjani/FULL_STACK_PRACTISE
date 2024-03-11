import { useContext, useEffect, useState } from 'react';
import '../stylesheets/ListBook.css'


import bookService from '../services/bookService'
import { BookContext } from '../ContainerV1'



export default function ListBook() {

    let {bookList, setBookList, setBook} = useContext(BookContext);

    //===============================================================================================
    useEffect(()=>{

        bookService.getAllBooks().then((response)=>{
            
            let books = response.data;
            setBookList(books);
            
        });
    }, [])
    //==================================================================================================
    async function handleDelete(bookId)
    {
        let delResponse = await bookService.deleteBook(bookId)
        let getResponse = await bookService.getAllBooks()
        let books = getResponse.data;
        setBookList(books);
    }
    function handleEdit(book)
    {
        setBook(book)
    }
    //==================================================================================================
    return (

        <div>
            <table>
                <thead>
                    <tr>
                        <th>Book Id</th>
                        <th>Book Name</th>
                        <th>Book Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookList.map((book)=>{

                            return (
                                <tr key = {book.bookId}>
                                    <td>{book.bookId}</td>
                                    <td>{book.bookName}</td>
                                    <td>{book.bookPrice}</td>
                                    <td><button onClick={()=>{ handleDelete(book.bookId) }}>Delete</button></td>
                                    <td><button onClick = {()=>{ handleEdit(book) }}>Edit</button></td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>
        </div>

    )
    //=====================================================================================================

}