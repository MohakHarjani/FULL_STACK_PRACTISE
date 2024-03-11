import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Book } from '../../../model/Book';
import { BookdaoService } from '../../../services/bookdao.service';


@Component({
  selector: 'app-listbook1',
  standalone: true,
  templateUrl: './listbook.component.html',
  styleUrl: './listbook.component.css',
  imports: [CommonModule, FormsModule]
})
export class ListbookComponent {

  bookList: Book[];
  bookService: BookdaoService;
  isEditting: boolean;
  edittedBook!: Book;

  constructor(bookService: BookdaoService) {
    this.bookService = bookService;
    this.bookList = [];
    this.isEditting = false;


    bookService.getAll().subscribe({
      next: (res: any) => {

        this.bookList = res.books;
        this.isEditting = false;
        this.edittedBook = new Book();

      },
      error: (error) => {
        console.log("Cannot get All books : (")
      }
    })
  }
  //=============================================================================================================
  deleteBook(bookId: number): void {
    console.log("BookId = " + bookId);
    this.bookService.delete(bookId).subscribe((res) => {

      console.log('Book with bookId  ' + bookId + " deleted successfully");

      this.bookService.getAll().subscribe((res) => {

        this.bookList = res.books;
      });

    })
  }
  // //========================================================================================================
  editBook(): void {
    ;
    this.bookService.update(this.edittedBook)
      .subscribe((res) => {

        this.bookService.getAll().subscribe((res) => {
          this.bookList = res.books;
        });

      });
    this.isEditting = false;
  }
  populateEdittedBook(currBook: Book) {
    this.edittedBook = new Book(currBook.bookId, currBook.bookName, currBook.bookPrice);
    this.isEditting = true;
  }
  changeEditStatus(newStatus: boolean) {
    this.isEditting = newStatus;
  }
  // //=======================================================================================================
  fetchBooks(): void {
    this.bookService.getAll().subscribe({
      next: (res) => {
        this.bookList = res.books;

      }
    });

  }
  //=============================================================================================================

}
