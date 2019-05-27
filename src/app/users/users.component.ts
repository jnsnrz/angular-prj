import { Component, OnInit, ViewChild } from '@angular/core';

import { UsersService } from '../services/users.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']

})

export class UsersComponent implements OnInit {

  title = 'Users title';
  clickStatus = 'Not clicked';
  isDisabled = false;
  input = '';

  users: any;

  temp: any;

   constructor(private usersService: UsersService) {
    this.users = this.usersService.list();
   }

  ngOnInit() { 
    console.log(this.temp);
  }

}
