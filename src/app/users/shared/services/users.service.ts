import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  url = 'https://reqres.in/api/users';

  constructor( private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(this.url);
  }

}
