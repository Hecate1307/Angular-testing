import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
  ) {
  }

  private baseUrl = 'https://books-b58e9-default-rtdb.firebaseio.com/';



  fetchBooks() {

  }


}
