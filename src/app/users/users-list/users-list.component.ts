import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../shared/services/users.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']

})

export class UsersComponent implements OnInit {

  users: User[];

    constructor(
      private usersService: UsersService,
      private router: Router
      ) { }

  ngOnInit() {
    this.usersService.list().subscribe(data => {
      this.users = data.data;
      console.log(this.users);
    });
  }

  onSelect(u) {
    this.router.navigate(['/users', u.id]);

  }

}
