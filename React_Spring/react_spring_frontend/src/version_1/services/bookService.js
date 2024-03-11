import axios from 'axios'

let bookService = {

    baseUrl: 'http://localhost:8080',

    getAllBooks: function () {
        
        return axios.get(this.baseUrl + "/books")  //this returns a promise....

    },

    getBook : function (bookId)
    {
        return axios.get(this.baseUrl + "/book/" + bookId);
    },

    postBook : function (newBook) {

           return axios.post(this.baseUrl + "/book", newBook);

    },


    deleteBook : function (bookId) {

        return axios.delete(this.baseUrl + "/book/" + bookId);

    },

    updateBook : function (book){

        return axios.put(this.baseUrl + "/book", book);

    }

}

export default bookService;