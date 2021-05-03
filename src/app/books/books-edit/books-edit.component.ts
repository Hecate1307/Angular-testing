import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.scss']
})
export class BooksEditComponent implements OnInit {
  book: Book;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<BooksEditComponent>,
    @Inject(MAT_DIALOG_DATA) book: Book,
    private bookService: BookService

  ) {
    this.book = book;

    this.form = this.fb.group({
      title: [book.title, Validators.required],
      seqNo: [book.seqNo, Validators.required],
      author: [book.author, Validators.required],
      rating: [book.rating, [Validators.required, Validators.pattern("^[0-9]+(\.?[0-9]+)?$"), this.ratingValidator]],
      price: [book.price, [Validators.required, Validators.pattern("^[0-9]+(\.?[0-9]+)?$")]],
      category: [book.category, Validators.required],
      coverUrl: [book.coverUrl, Validators.required],
      description: [book.description, Validators.required],
    });
  }

  ngOnInit(): void {
    console.log(this.book);
  }

  save() {
    const val = this.form.value;
    console.log(val);
    this.bookService.saveBook(this.book.id, val).subscribe(
        book => this.bookService.bookChanged.next({...book})
      );
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

  ratingValidator:ValidatorFn = (control: AbstractControl): {[key:string] : boolean} | null => {
    if (control.value > 5) {
      return { 'ratingValidator': true }
    }
    return null;
  }

  // ratingValidator() {
  //   return (control: AbstractControl): { [key: string]: boolean } | null => {
  //     if (control.value > 5) {
  //       return { 'ratingValidator': true }
  //     }
  //     return null;
  //   };
  // }

}
