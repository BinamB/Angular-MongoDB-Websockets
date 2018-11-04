import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';

interface myData {
  email: string,
  status: boolean,
  userName: string,
  password: string
}

interface isLoggedIn {
  status: boolean
}

interface updateData {
  success: boolean
}

interface logoutStatus {
  success: boolean
}
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<myData>('/api/data')
  }

  deleteUser(){
    return this.http.get<updateData>('/api/delete')
  }

  updateUserName(value) {
    return this.http.post<updateData>('/api/username', {
      value
    })
  }

  updateEmail(value) {
    return this.http.post<updateData>('/api/email', {
      value
    })
  }

  updatePassword(value) {
    return this.http.post<updateData>('/api/password', {
      value
    })
  }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('/api/isloggedin')
  }

  logout() {
    return this.http.get<logoutStatus>('/api/logout')
  }

}