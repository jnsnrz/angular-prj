import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private data: User[] = [
    {id: 1, name: 'Steewe'},
    {id: 2, name: 'Steewe'},
    {id: 3, name: 'Steewe'},
    {id: 4, name: 'Steewe'}
  ];

  getData(): User[] {

    return this.data;
  }

  addData(id: any, name: string) {

    this.data.push(new User(id, name));

  }


  constructor() { }

}
