import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './core/header/header.component';
import {FooterComponent} from './core/footer/footer.component';
import {NavComponent} from './core/nav/nav.component';
import {UsersComponent} from './users/users.component';
import {HomeComponent} from './core/home/home.component';
import {PostsComponent} from './blog/posts/posts.component';
import {AsideComponent} from './core/aside/aside.component';
import {AddPostComponent} from './blog/add-post/add-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    UsersComponent,
    HomeComponent,
    PostsComponent,
    AsideComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
