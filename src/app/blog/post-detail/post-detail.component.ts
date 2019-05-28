import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../shared/models/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  @Input() item: Post;

  constructor() { }

  ngOnInit() {
  }

}
