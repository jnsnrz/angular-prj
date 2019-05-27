import { Injectable } from '@angular/core';

<<<<<<< HEAD
=======
import { Observable, of } from 'rxjs';
>>>>>>> a5b4eeccd8651b13868d10a1fc4a67ae8f58d4f1
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  // private _data: User[] = [
  //   {id: 1, name: 'Steewe', imgPath: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'},
  //   {id: 2, name: 'Steewe', imgPath: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'},
  //   {id: 3, name: 'Steewe', imgPath: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'},
  //   {id: 4, name: 'Steewe', imgPath: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'},
  //   {id: 5, name: 'Steewe', imgPath: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'},
  //   {id: 6, name: 'Steewe', imgPath: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'},
  //   {id: 7, name: 'Steewe', imgPath: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'},
  //   {id: 8, name: 'Steewe', imgPath: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'},
  //   {id: 9, name: 'Steewe', imgPath: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'},
  //   {id: 10, name: 'Steewe', imgPath: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'},
  // ];

  // get data() {
  //   return this._data;
  // }

  public users: any;

  url = 'https://reqres.in/api/users';
  
  constructor( private http: HttpClient) {

   }

   list(): Observable<any>{
     console.log(Observable);
    return this.http.get(this.url);

  }

}
