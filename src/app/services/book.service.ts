import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookChanged = new Subject<any>();

  private books: Book[] = [
    new Book(
      1,
      '0439785960',
      'Harry Potter and the Half-Blood Prince (Harry Potter #6)',
      'J.K. Rowling/Mary GrandPré',
      4.57,
      'The war against Voldemort is not going well; even the Muggles have been affected. Dumbledore is absent from Hogwarts for long stretches of time, and the Order of the Phoenix has already suffered losses...',
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1587697303l/1._SX318_.jpg',
      'Fiction',
      26.44
    ),
    new Book(
      2,
      '0439358078',
      'Milk and Honey',
      'Rupi Kaur',
      4.49,
      'The book is divided into four chapters, and each chapter serves a different purpose. Deals with a different pain. Heals a different heartache. milk and honey takes readers through a journey of the most bitter moments in life and finds sweetness in them because there is sweetness everywhere if you are just willing to look...',
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1491595510l/23513349.jpg',
      'Non-fiction',
      24.22
    ),
    new Book(
      3,
      '0345453743',
      'Your Soul is a River',
      'Nikita Gill',
      4.37,
      'what a perfect collision of star it was that came together at just the right moment at just the right time to build the incredible thing that is you― Nikita Gill, Your Soul is a River',
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1466046720l/30630152._SX318_.jpg',
      'Non-fiction',
      32.24
    ),
    new Book(
      4,
      '0739322206',
      'She Drives Me Crazy',
      'Kelly Quindlen',
      4.37,
      'After losing spectacularly to her ex-girlfriend in their first game since their break up, Scottie Zajac gets into a fender bender with the worst possible person: her nemesis, the incredibly beautiful and incredibly mean Irene Abraham. Things only get worse when their nosey, do-gooder moms get involved and the girls are forced to carpool together until Irene’s car gets out of the shop.',
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1593673607l/52516406._SY475_.jpg',
      'Fiction',
      36.42
    ),
    new Book(
      5,
      '076790818X',
      'A Gambling Man',
      'David Baldacci',
      4.30,
      'The 1950s are on the horizon, and Archer is in dire need of a fresh start after a nearly fatal detour in Poca City. So Archer hops on a bus and begins the long journey out west to California, where rumor has it there is money to be made if you’re hard-working, lucky, criminal—or all three.',
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1617718790l/54334352.jpg',
      'Fiction',
      19.22
    ),
    new Book(
      6,
      '0767915062',
      'Everything Is Fine',
      'Vince Granata',
      4.37,
      'In this extraordinarily moving memoir about grief, mental illness, and the bonds of family, a writer delves into the tragedy of his mother’s violent death at the hands of his brother who struggled with schizophrenia. Perfect for fans of An Unquiet Mind and The Bright Hour.',
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1617544252l/54304169.jpg',
      'Non-fiction',
      23.53
    )
  ];

  constructor() { }

  saveBook(id: number, newBook: Book) {
    let newBooks = [...this.books];
    newBooks[id - 1] = newBook;
    this.books = newBooks;
  }

  getBooks() {
    return this.books.slice();
  }

  getBookByID(id: number) {
    return this.books[id - 1];
  }
}
