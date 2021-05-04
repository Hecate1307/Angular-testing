import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BookService } from 'src/app/services/book.service';
import { BooksModule } from '../books.module';

import { HomeComponent } from './home.component';
import { BOOKS } from '../../../assets/mockBooks';
import { DebugElement } from '@angular/core';
import { of, from, Subject } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement;
  let bookService: any;
  
  const fictionBooks = BOOKS.filter(book => book.category === "Fiction");
  const nonFictionBooks = BOOKS.filter(book => book.category === "Non-fiction");
  beforeEach(() => {

    const bookServiceSpy =  jasmine.createSpyObj('BookService', ['getBooks'], {'bookChanged': new Subject()});
    TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule, BooksModule, NoopAnimationsModule ],
      declarations: [ HomeComponent ],
      providers: [
        {provide: BookService, useValue: bookServiceSpy}
      ],
    })
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    bookService = TestBed.inject(BookService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display only fiction books', () => {
    

    bookService.getBooks.and.returnValue(of(fictionBooks));
    fixture.detectChanges();
    let tabs = el.queryAll(By.css(".mat-tab-label"));

    expect(tabs.length).toBe(1, "Incorrect number of categories are fetched");

    expect(tabs[0].nativeElement.textContent).toBe("fiction", "Label name incorrect");

  });

  it('should display both tabs', () => {

    bookService.getBooks.and.returnValue(of(BOOKS));
    fixture.detectChanges();
    let tabs = el.queryAll(By.css(".mat-tab-label"));

    expect(tabs.length).toBe(2, "Incorrect number of categories are fetched");
  })

  it('should switch from fiction to non-fiction books', () => {
    bookService.getBooks.and.returnValue(of(BOOKS));
    fixture.detectChanges();
    let tabs = el.queryAll(By.css(".mat-tab-body"));
    tabs[1].nativeElement.click();
    pending();
  })
});
