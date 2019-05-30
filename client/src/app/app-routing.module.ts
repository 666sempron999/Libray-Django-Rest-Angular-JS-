import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookCreateComponent } from './book-create/book-create.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-book' },
  { path: 'create-book', component: BookCreateComponent },
  { path: 'book-list', component: BookListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
