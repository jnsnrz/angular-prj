import { Component, OnInit, ViewChild } from '@angular/core';

import { UsersService } from '../shared/services/users.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']

})

export class UsersComponent implements OnInit {

  users: User[];

    constructor(private usersService: UsersService) {
    //this.users = this.usersService.list();
   }

  ngOnInit() {
    this.usersService.list().subscribe(data => {
      this.users = data.data;
      console.log(this.users);
    });
  
  }

}
