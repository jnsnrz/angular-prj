import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  emptyTitle = 'No posts provided';

  posts: Post[] = [
    {title: 'Post 1', text: 'this is the text of post 1'},
    {title: 'Post 2', text: 'this is the text of post 2'},
    {title: 'Post 3', text: 'this is the text of post 3'},
    {title: 'Post 4', text: 'this is the text of post 4'},
    {title: 'Post 5', text: 'this is the text of post 5'}
  ];


  constructor() { }

  ngOnInit() { }

}
