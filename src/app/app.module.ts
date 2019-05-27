import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavComponent } from './core/nav/nav.component';
import { AsideComponent } from './core/aside/aside.component';

import { PostsComponent } from './blog/posts/posts.component';
import { AddPostComponent } from './blog/add-post/add-post.component';
import { RecentPostsComponent } from './blog/recent-posts/recent-posts.component';
import { PostDetailComponent } from './blog/post-detail/post-detail.component';

import { ToDoItemComponent } from './toDo/to-do-item/to-do-item.component';
import { ToDoListComponent } from './toDo/to-do-list/to-do-list.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';

import { HomeComponent } from './home/home.component';
import { UsersService } from './services/users.service';

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
    AddPostComponent,
    RecentPostsComponent,
    UserComponent,
    PostDetailComponent,
    ToDoListComponent,
    ToDoItemComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
