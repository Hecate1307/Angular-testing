import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books: Book[];
  Fictionbooks: Book[];
  NonFictionbooks: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    this.reloadBooks();
  }
  reloadBooks() {
    this.Fictionbooks = this.filterByCategory(this.books, 'Fiction');
    this.NonFictionbooks = this.filterByCategory(this.books, 'Non-fiction');
    console.log(this.Fictionbooks);
  }
  filterByCategory(books: Book[], category: string) {
    return books.filter(book =>
      book.category === category
    );

  }


}
