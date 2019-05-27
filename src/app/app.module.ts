import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { AsideComponent } from './aside/aside.component';
import { AddPostComponent } from './add-post/add-post.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';

import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ToDoListComponent } from './toDo/to-do-list/to-do-list.component';
import { ToDoItemComponent } from './toDo/to-do-item/to-do-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { UsersService } from './users.service';

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
