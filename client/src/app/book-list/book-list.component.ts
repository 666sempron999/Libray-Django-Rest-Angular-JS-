import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  Books: any = [];

  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.looadBooks()
  }

  // get all books
  looadBooks() {
    return this.restApi.getBooks().subscribe((data: {}) => {
      this.Books = data;
    })
  }

}
