import { useState, useContext } from "react"
import bookService from '../services/bookService'
import { BookContext } from '../ContainerV1'

export default function RegisterBook(props)
{
    let {book, setBook, bookList, setBookList}  = useContext(BookContext)
   
    //============================================================================================
    async function handleSubmit(e)
    {
        e.preventDefault();

        let response = (await bookService.getBook(book.bookId))
        let foundBook = response.data;


        if (foundBook.bookId == 0)
            await bookService.postBook(book);
        else
            await bookService.updateBook(book);

        let books = (await bookService.getAllBooks()).data;
        setBookList(books);
        
    }
    //=======================================================================================================
    return (
        <div>
            <form>

                <label for = 'bookId'>Book Id : </label>
                <input 
                    type = 'number' 
                    id = 'bookId' 
                    value = {book.bookId}
                    onChange = { (e)=>{ setBook({...book, bookId : e.target.value }) }}
                />
                <br/>

                <label for = 'bookName'>Book Name : </label>
                <input
                    type = 'text'
                    id = 'bookName'
                    value = {book.bookName}
                    onChange = { (e)=> { setBook({...book, bookName : e.target.value }) }}
                    
                />
                <br/>

                <label for = 'bookPrice'>Book Price : </label>
                <input
                    type = 'number'
                    id = 'bookPrice'
                    value = {book.bookPrice}
                    onChange = { (e)=> { setBook({...book, bookPrice : e.target.value })}}
                
                />
                <br/>

                <button onClick = {(e)=>{  handleSubmit(e) }}>Submit</button>

                <hr/>
                <p>Book Id : {book.bookId}</p>
                <p>Book Name : {book.bookName}</p>
                <p>Book Price : {book.bookPrice}</p>

            </form>

        </div>
    )
}