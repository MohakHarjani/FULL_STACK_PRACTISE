import { useState, useContext } from "react"
import bookService from '../services/bookService'
import { BookContext } from '../ContainerV2'
import "bootstrap/dist/css/bootstrap.min.css";
import '../stylesheets/RegisterBook.css'

export default function RegisterBook(props) {
    let { book, setBook, bookList, setBookList } = useContext(BookContext)
    let [status, setStatus] = useState("Press submit to add/update a book.....");
    let [statusClass, setStatusClass] = useState("")
    //============================================================================================
    function validateBook()
    {
        let errors = "";

        if (book.bookId <= 0)
          errors += "bookId should be > 0, "
        if (book.bookName.length < 3)
          errors += "bookName must have atleast 3 characters, "
        if (book.bookPrice <= 0)
          errors += "bookPrice  should be > 0"

        return errors;
    }
    //===========================================================================================================
    async function handleSubmit(e) {
        e.preventDefault();

        let errorString = validateBook();
        if (errorString.length != 0)
        {
            setStatus("Cannot submit...." + errorString)
            setStatusClass("error")
            return;
        }
        else
            setStatusClass("success")

        let response = (await bookService.getBook(book.bookId))
        let foundBook = response.data;

        if (foundBook.bookId == 0) {
            await bookService.postBook(book);
            setStatus(`Book with id :  ${book.bookId}  posted successfully....`);
        }
        else {
            await bookService.updateBook(book);
            setStatus(`Updated book from { ${foundBook.bookId} , ${foundBook.bookName}, ${foundBook.bookPrice} }
                        to  { ${book.bookId} , ${book.bookName}, ${book.bookPrice} } `);
        }

        let books = (await bookService.getAllBooks()).data;
        setBookList(books);
        setBook({ bookId: '', bookName: '', bookPrice: '' })

    }
    //=======================================================================================================
    return (
        <div className = 'register_book'>

            <div className="form-group form-container">
                <form>

                    <div>
                        <label for='bookId'>Book Id : </label>
                        <input
                            className="form-control"
                            type='number'
                            id='bookId'
                            value={book.bookId}
                            onChange={(e) => { setBook({ ...book, bookId: e.target.value }) }}
                        />
                    </div>
                    
                    <div>
                        <label for='bookName'>Book Name : </label>
                        <input
                            className="form-control"
                            type='text'
                            id='bookName'
                            value={book.bookName}
                            onChange={(e) => { setBook({ ...book, bookName: e.target.value }) }}

                        />
                    </div>

                    <div>
                        <label for='bookPrice'>Book Price : </label>
                        <input
                            className="form-control"
                            type='number'
                            id='bookPrice'
                            value={book.bookPrice}
                            onChange={(e) => { setBook({ ...book, bookPrice: e.target.value }) }}

                        />
                    </div>

                    <div>
                        <button 
                            className="btn btn-success"
                            onClick={(e) => { handleSubmit(e) }}>Submit</button>

                    </div>
                </form>
            </div>

            <div className="display-container">
                <p className = {statusClass}><b>Status : </b> {status}</p>
                <p>
                    <b>Current Book Details : </b> 
                    {
                        (book.bookId == 0)? 
                    `Details not yet entered.....` 
                        
                        :
                    `Book Id : ${book.bookId} , 
                        Book Name : ${book.bookName}, 
                        Book Price : ${book.bookPrice} ` 
                    }
                </p>
            </div>

        </div>
    )
}