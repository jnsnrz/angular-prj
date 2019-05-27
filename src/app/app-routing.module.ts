import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Params } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';

import { ToDoListComponent } from './toDo/to-do-list/to-do-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { PostsComponent } from './blog/posts/posts.component';
import { AddPostComponent } from './blog/add-post/add-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'toDo-list', component: ToDoListComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {

      const id = <string>params['id'];
      if(id != null) {
        
      }

    });
    
  }


}
