import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//import { HttpClient } from '@angular/common/http';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private data: User[] = [
    {id: 1, name: 'Steewe', imgPath: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'},
    {id: 2, name: 'Steewe', imgPath: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'},
    {id: 3, name: 'Steewe', imgPath: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'},
    {id: 4, name: 'Steewe', imgPath: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'},
  ];

  // getData(): Observable<User[]> {

  //   return of(this.data);
  // }

  // addData(id: any, name: string): void {

  //   this.data.push(new User(id, name, imgPath));

  // }


  constructor() { }

}
