import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-prj';

  constructor(title: Title, meta: Meta) {

    title.setTitle('Blog on angular');
    meta.addTag({name: 'author', content: 'Yevheniia'});

  }
}
