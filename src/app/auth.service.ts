import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData{
  success: boolean,
  message: string
}

interface logInData{
  success: boolean,
  message: string
}

// interface AllData{
//   success: boolean
// }

@Injectable()
export class AuthService {

  private loggedInStatus = false

  constructor(private http: HttpClient) { }
  
  getUserDetails(userName, password){
    //post these details to API server return user info if correct
    return this.http.post<logInData>('/api/login', {
      userName,
      password
    })
  }
  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    return this.loggedInStatus
  }
    
  // getUserAll(userName, email, password){
  //   //post these details to API server return user info if correct
  //   return this.http.post<AllData>('/api/login', {
  //     userName,
  //     email,
  //     password
  //   })
  // }

  registerUser(userName, email, password){
    return this.http.post<myData>('/api/register', 
    {userName, 
    email,
    password
    })
  }
}
