import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AboutDemoComponent } from '../about-demo/about-demo.component';
import { AppRoutingModule } from '../app-routing.module';
import { Materials } from '../materials.module';
import { BookComponent } from './book/book.component';
import { BooksCardListComponent } from './books-card-list/books-card-list.component';
import { BooksEditComponent } from './books-edit/books-edit.component';
import { HomeComponent } from './home/home.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        HomeComponent,
        AboutDemoComponent,
        BookComponent,
        BooksCardListComponent,
        BooksEditComponent
    ],
    imports: [
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserModule,
        Materials,
        BarRatingModule,
        FormsModule,
    ],
    exports: [
        HomeComponent,
        AboutDemoComponent,
        BookComponent,
        BooksCardListComponent,
        BooksEditComponent
    ]
    // entryComponents: [CourseDialogComponent]

}) export class BooksModule {



}



