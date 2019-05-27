import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';
import { User } from '../user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']

})
export class UsersComponent implements OnInit {

  title = 'List of users';
  emptyTitle = 'No users provided';

  //users: User[] = [
  users: Array<User> = [ ];

  constructor(private usersService: UsersService) {
    this.users = this.usersService.data;
  }

  ngOnInit() { }

}
