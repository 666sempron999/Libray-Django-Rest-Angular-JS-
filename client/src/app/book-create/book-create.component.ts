import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  Authors: any = [];

  @Input() bookDetails = { title: '' , description: '', year_of_creating: 0}

  constructor(
    public restApi: RestApiService,
    public router: Router
    ) { }

  ngOnInit() {
      this.loadAuthors()
    }

  //Get all authors to create popup
  loadAuthors() {
      return this.restApi.getAuthors().subscribe((data: {}) => {
        this.Authors = data;
        console.log(data);
      })
    }

  //add new book
  addBook(dataBook) {
      this.restApi.createBook(this.bookDetails).subscribe((data: {}) => {
        this.router.navigate(['/book-list'])
      })
    }

}
