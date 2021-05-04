import { HttpClientTestingModule } from '@angular/common/http/testing';
import { componentFactoryName } from '@angular/compiler';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkDirectiveStub } from 'src/app/testingStubs/router-link-directive-stub';
import { BOOKS } from 'src/assets/mockBooks';
import { BooksModule } from '../books.module';

import { BooksCardListComponent } from './books-card-list.component';

describe('BooksCardListComponent', () => {
  let comp: BooksCardListComponent;
  let fixture: ComponentFixture<BooksCardListComponent>;
  let elDe: DebugElement;
  let el: any;

  beforeEach( () =>{
    TestBed.configureTestingModule({
      imports:[ BooksModule ],
    })

    fixture = TestBed.createComponent(BooksCardListComponent);
    comp = fixture.componentInstance;
    el = fixture.debugElement;

    //el = elDe.nativeElement;
    //el = fixture.nativeElement;
  })
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     imports: [BooksModule],
  //     declarations: [ BooksCardListComponent ]
  //   })
  //   .compileComponents();
  // });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('should have the books list', () => {
    comp.books = BOOKS.filter(book => book.category == "Fiction");
    fixture.detectChanges();
    const books = el.queryAll(By.css(".books-card"));
    expect(books).toBeTruthy("no books found");
    expect(books.length).toBe(3, "incorrect book numbers")
  })

  it('should display books properly', () => {

    let books = BOOKS.filter(book => book.category == "Fiction");
    comp.books = books;
    fixture.detectChanges();
    const book = el.queryAll(By.css("mat-card"))[0];
    const bookElement = book.nativeElement as HTMLElement;

    expect(bookElement).toBeTruthy("First book not found");
    
    expect(bookElement.getElementsByTagName("mat-card-title")[0].textContent).toBe(books[0].title, "Title not match");

    expect(bookElement.getElementsByTagName("img")[0].src).toBe(books[0].coverUrl, "image source not match");

    expect(bookElement.getElementsByTagName("mat-card-content")[0].firstChild.textContent).toBe(books[0].description, "Description not match")

  })

  it('should navigate well when click Detail', () => {

    pending();
    // comp.books = [...BOOKS];
    // fixture.detectChanges();


    // let linkDes: DebugElement[] = el.queryAll(By.directive(RouterLinkDirectiveStub));
    // console.log(linkDes.length)

    //let routerLink: RouterLinkDirectiveStub = linkDe.injector.get(RouterLinkDirectiveStub);

    // expect(routerLink.linkParams).toBe('/book/1', 'router link setup not correct');
    // expect(routerLink.navigatedTo).toBeNull('not navigation when set up');

    // linkDe.triggerEventHandler('click',null);
    // fixture.detectChanges();

    // expect(routerLink.navigatedTo).toBe('/book/1');
  })

  it('should open popup when click edit', () => {
    pending();
  })

});
