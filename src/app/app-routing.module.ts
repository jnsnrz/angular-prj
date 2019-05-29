import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users-list/users-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { HomeComponent } from './core/home/home.component';
import { ToDoListComponent } from './toDo/to-do-list/to-do-list.component';
import { PostsComponent } from './blog/posts/posts.component';
import { AddPostComponent } from './blog/add-post/add-post.component';
import { ProductListComponent } from './shop/product-list/product-list.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'toDo-list', component: ToDoListComponent },
  { path: 'shop', component: ProductListComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [];
