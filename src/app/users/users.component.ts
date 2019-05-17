import { Component, OnInit, ViewChild } from '@angular/core';
// import { UsersService } from '../users.service';
import { User } from '../user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],

})
export class UsersComponent implements OnInit {

  title = 'Users title';
  clickStatus = 'Not clicked';
  isDisabled = false;
  input = '';

  users: User[] = [
    {id: 1, name: 'Steewe', imgPath: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'},
    {id: 2, name: 'Steewe', imgPath: 'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg'},
    {id: 3, name: 'Steewe', imgPath: 'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg'},
    {id: 4, name: 'Steewe', imgPath: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'},
  ];


  // constructor(private items: UsersService) { 

  constructor() { 

    // setTimeout(() => {
    //   this.isDisabled = true;
    // }, 2000);

  }

  ngOnInit() { }

  getTitle(): string {
    return this.title;
  }

  // getData(): void {
  //   this.items.getData()
  //   .subscribe(data => this.users = data);
  // }

  onClickFunc() { 
    this.clickStatus = 'Clicked';
  }

  onInputChange(event: any) {
    this.input = event.target.value;
  }

}
