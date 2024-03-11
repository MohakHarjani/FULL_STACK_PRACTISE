import { useContext, useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../stylesheets/ListBook.css'


import bookService from '../services/bookService'
import { BookContext } from '../ContainerV2'



export default function ListBook() {

    let {bookList, setBookList, setBook} = useContext(BookContext);

    //===============================================================================================
    useEffect(()=>{

        bookService.getAllBooks().then((response)=>{
            
            let books = response.data;
            setBookList(books);
            
        }).catch((error)=>{

           alert("Cannot connect to server..." + error.message)

        });
    }, [])
    //==================================================================================================
    async function handleDelete(bookId)
    {
        let delResponse = await bookService.deleteBook(bookId)
        let getResponse = await bookService.getAllBooks()
        
        let books = getResponse.data;
        setBookList(books);
        alert("Book with id : " + bookId + " will be deleted ...")
    }
    function handleEdit(book)
    {
        setBook(book)
    }
    //==================================================================================================
    return (

        <div className='list_book'>
            <table>
                <thead>
                    <tr>
                        <th>Book Id</th>
                        <th>Book Name</th>
                        <th>Book Price</th>
                        <th>Book Operations</th>
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
                                    <td>
                                        <button
                                            className = 'btn btn-danger'
                                            onClick={()=>{ handleDelete(book.bookId) }}>Delete</button>

                                        <button
                                            className = 'btn btn-primary'
                                            onClick = {()=>{ handleEdit(book) }}>Edit</button>
                                    </td>
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