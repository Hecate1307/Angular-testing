import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BooksEditComponent } from '../books-edit/books-edit.component';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books-card-list',
  templateUrl: './books-card-list.component.html',
  styleUrls: ['./books-card-list.component.scss']
})
export class BooksCardListComponent implements OnInit {

  @Input() books: Book[];
  constructor(private dialog: MatDialog ) { }

  ngOnInit(): void { }
  
  editBook(book: Book) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = book;
    const dialogRef = this.dialog.open(BooksEditComponent, dialogConfig);
  }

}
