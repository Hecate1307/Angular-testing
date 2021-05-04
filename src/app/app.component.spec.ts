import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { RouterLinkDirectiveStub } from './testingStubs/router-link-directive-stub';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let el: DebugElement;
  let linkDes: DebugElement[];
  let routerLinks: RouterLinkDirectiveStub[];


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, RouterLinkDirectiveStub
      ],
      schemas:[
        NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
    linkDes = el.queryAll(By.directive(RouterLinkDirectiveStub));
    routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));

  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('routerLink should appear', () => {
    
    expect(routerLinks.length).toBe(2, 'should have 3 routerLinks');
    expect(routerLinks[0].linkParams).toBe('/');
    expect(routerLinks[1].linkParams).toBe('/about');
  
  })

  it('routerLink should navigate to right place', () => {
    const aboutLinkDe = linkDes[1];    // heroes link DebugElement
    const aboutLink = routerLinks[1];  // heroes link directive

    expect(aboutLink.navigatedTo).toBeNull('should not have navigated yet');

    aboutLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(aboutLink.navigatedTo).toBe('/about');
  })

});
