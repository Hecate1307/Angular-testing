import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BookService } from './book.service';
import { BOOKS } from '../../assets/mockBooks';
import { Book } from '../model/book';
import { HttpErrorResponse } from '@angular/common/http';

describe('BookService', () => {
  let bookService: BookService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ BookService ]
    });
    bookService = TestBed.inject(BookService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(bookService).toBeTruthy();
  });

  it('should get all books', () =>{
    bookService.getBooks().subscribe(
      books => {
        expect(books).toBeTruthy('No books return');
        expect(books.length).toBe(6, 'Incorrect Books Number');
        const book = books.find(book => book.id === 1);
        expect(book.title).toMatch(/Harry Potter/, 'Not Correct Book');
      }
    );
    const req = httpTestingController.expectOne('http://localhost:5000/books');
    expect(req.request.method).toBe('GET');
    req.flush(BOOKS);
  });

  it('should get book by ID', () => {
    bookService.getBookByID(1).subscribe(
      book => {
        expect(book).toBeTruthy('No book return');
        expect(book.title).toMatch('Harry Potter', 'Not Correct Book');
      }
    );
    const req = httpTestingController.expectOne('http://localhost:5000/books/1');
    expect(req.request.method).toBe('GET');
    req.flush(BOOKS.find(book => book.id === 1));
  });

  it("should save the book", () => {
    let changes:Partial<Book> = {
      "rating": 3,
      "title": "fake Harry Potter"
    }
    bookService.saveBook(1, changes).subscribe(
      book => {
        expect(book).toBeTruthy('No book return');
        expect(book.title).toBe('fake Harry Potter', 'Title not updated');
        expect(book.rating).toBe(3, 'Rating not updated');
      }
    );
    const req = httpTestingController.expectOne('http://localhost:5000/books/1');
    expect(req.request.method).toBe('PUT');
    expect(req.request.body.title).toEqual('fake Harry Potter');
    expect(req.request.body.rating).toBe(3);
    const oldBook = BOOKS.find((book) => book.id === 1)
    req.flush({...oldBook, ...changes});
  })

  it('should give an error if 404', () => {
    let errorMessage = "404 Not find Error";
    bookService.getBookByID(100).subscribe(
      () => fail('should fail with 404 Error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toBe(404)
      }
    )

    const req = httpTestingController.expectOne('http://localhost:5000/books/100');
    expect(req.request.method).toBe('GET');
    //req.flush('Page Not Found', {status:404, statusText:'Server Not Found'});
    const mockError = new ErrorEvent("Server Not Found", {
      message: "Page Not Found"
    })
    req.error( mockError, {status:404, statusText:'Server Not Found'});
  })


  afterEach(() => {
    httpTestingController.verify();
  })
});
