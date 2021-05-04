import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Book } from '../model/book';
import { BOOKS } from '../../assets/mockBooks';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookChanged = new Subject<Book>();
  url = "http://localhost:5000/books";

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]>{ 
    return this.http.get<Book[]>(this.url);
  }
  
  saveBook(id: number, newBook: Partial<Book>) {
    let bookUrl = `${this.url}/${id}`;
    return this.http.put<Book>(bookUrl, newBook);
  }

  getBookByID(id: number): Observable<Book> {
    let bookUrl = `${this.url}/${id}`;
    return this.http.get<Book>(bookUrl);
  }
}
