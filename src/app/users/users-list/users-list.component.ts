import { Component, OnInit, ViewChild } from '@angular/core';

import { UsersService } from '../services/users.service';
import { User } from '../models/user.model';

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

  users: User[];

  temp: any;


  constructor(private usersService: UsersService) { 

  
  }

  ngOnInit() { 

    this.usersService.list().subscribe(data => this.temp=data);
    console.log(this.temp);

  }

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
