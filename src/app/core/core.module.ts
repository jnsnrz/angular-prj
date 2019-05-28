import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { AsideComponent } from './aside/aside.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    AsideComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    AsideComponent,
    HomeComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
