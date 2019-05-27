import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  location: any;
  isHomePage = false;

  constructor(private _router: Router) { 

    this.location = _router.url;

  }

  ngOnInit() {

  if(this.location !== '/') {
    this.isHomePage = false;
  }

    console.log(this.location);
  }

}
