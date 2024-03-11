import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BookdaoService } from '../../../services/bookdao.service';
import { Router } from '@angular/router';
import { Book } from '../../../model/Book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registerbook1',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registerbook.component.html',
  styleUrl: './registerbook.component.css'
})
export class RegisterbookComponent {
  private bookService: BookdaoService;
  myBook: Book;
  status: string;
  static bookIdx: number = 1;


  constructor(bookService: BookdaoService, private router: Router) {
    this.bookService = bookService;
    this.myBook = new Book(RegisterbookComponent.bookIdx, "Dummy", 1000);
    this.status = "Book details not yet submitted....."
  }

  goList(): void {
    this.router.navigateByUrl('/listbooks');
  }

  addBook(): void {
    let tempBook: Book = this.myBook;
    if (this.myBook.bookId <= 0 || this.myBook.bookName == "" || this.myBook.bookPrice <= 0) {
      this.status = "Book validation failed. Cannot add book......";
    }
    else {
      this.bookService.create(this.myBook).subscribe(
        {
          next: (res) => {

            let b: Book = res.book;
            console.log(b, b.bookName)
            this.status = "Added " + b.bookId + ",  " + b.bookName + ", " + b.bookPrice + " successfully....";


          },
          error: (err) => {
            console.log(err);
            this.status = "Book " + tempBook + " not posted , Cause  : " + err.error.message;
            ;
            RegisterbookComponent.bookIdx = tempBook.bookId
            this.myBook.bookId = tempBook.bookId;


          },
          complete: () => {

          }
        }
      );
    }
    RegisterbookComponent.bookIdx++;
    this.myBook = new Book(RegisterbookComponent.bookIdx, 'Dummy', 1000);
  }
}
