import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  api = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) {}

  getUser(page: number, per_page: number) {
    const x = 'https://reqres.in/api/users?${page}&${per_page}';
    return this.http.get(x);
  }
}
