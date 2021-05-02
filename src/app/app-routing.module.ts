import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutDemoComponent } from './about-demo/about-demo.component';
import { BookComponent } from './books/book/book.component';
import { HomeComponent } from './books/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'about',
    component: AboutDemoComponent
  },
  {
    path: 'books/:id',
    component: BookComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
