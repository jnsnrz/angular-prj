import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [
    PostsComponent,
    AddPostComponent,
    RecentPostsComponent,
    PostDetailComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
