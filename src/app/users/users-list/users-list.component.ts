import { Component, OnInit, ViewChild } from '@angular/core';

// import { UsersService } from '../services/users.service';
// import { User } from '../models/user.model';

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

  temp: any;

  constructor() {
  //  constructor(private usersService: UsersService) {
    //this.users = this.usersService.list();
   }


  ngOnInit() { 

    //this.usersService.list().subscribe(data => this.temp=data);
    //console.log(this.temp);

  }

}
