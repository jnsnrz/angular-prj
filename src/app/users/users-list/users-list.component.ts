import { Component, OnInit, ViewChild } from '@angular/core';

import { UsersService } from '../shared/services/users.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']

})

export class UsersComponent implements OnInit {

  title = 'Users title';
  clickStatus = 'Not clicked';
  isDisabled = false;
  input = '';

  users: any;



    constructor(private usersService: UsersService) {
    this.users = this.usersService.list();
   }


  ngOnInit() { 

    this.usersService.list().subscribe(data => this.users = data);
    console.log(this.users);

  }

}
