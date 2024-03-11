//https://www.techiediaries.com/angular/angular-9-8-crud-example-and-tutorial/

import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import {  throwError } from 'rxjs';
import { catchError, filter } from 'rxjs/operators';
import { Book } from '../model/Book';

//async calls => callback , (promise / asyn-await),  observable 
@Injectable({
  providedIn: 'root'
})
export class BookdaoService {

   bookrArr:Book[] = [];
    flag:boolean=false;

    private apiServer = "http://localhost:8080";
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    
   constructor(private httpClient: HttpClient){ }

  //===========================================================================================================
  create(book:Book): Observable<any> {
    return this.httpClient.post<any>(this.apiServer + '/book', JSON.stringify(book), 
    this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  //===========================================================================================================
  getById(id:number): Observable<Book> {
    
    return this.httpClient.get<Book>(this.apiServer + '/books/' + id)
    .pipe(
      catchError(this.errorHandler)
    )

  }
  //======================================================================================================
  getAll(): Observable<any> {
    return this.httpClient.get<any>(this.apiServer + '/book/all')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  //======================================================================================================
  update(book:Book): Observable<any> {
    return this.httpClient.put<any>(this.apiServer + '/book/', JSON.stringify(book), 
    this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  //============================================================================================================
  delete(id:number){
    return this.httpClient.delete<any>(this.apiServer + '/book/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  //==============================================================================================================
  errorHandler(error:HttpErrorResponse) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => error);
 }
   
     
  
    
    
}


