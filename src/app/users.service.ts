import { Injectable } from '@angular/core';
import { User } from './user';

import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // users: User[];
  url = 'http://dummy.restapiexample.com/api/v1/employees';

  constructor(private http: HttpClient) { }

  public get(url: string): Observable<any> {
    return this.http.get(url);
  }
}
