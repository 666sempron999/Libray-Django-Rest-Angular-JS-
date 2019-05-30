import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// // delete
// import { Employee } from '../shared/employee';
// import { Characteristic } from '../shared/characteristic';
// delete

//my code
import { Book } from '../shared/book';
import { Author } from '../shared/author';
//mycode

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  // Define API URI
  apiURL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAuthors(): Observable<Author> {
      return this.http.get<Author>(this.apiURL + '/authors/')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

  getBooks(): Observable<Book> {
      return this.http.get<Book>(this.apiURL + '/books/')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

  createBook(book): Observable<Book> {
      return this.http.post<Book>(this.apiURL + '/books/', JSON.stringify(book), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

  // Error handling
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}
