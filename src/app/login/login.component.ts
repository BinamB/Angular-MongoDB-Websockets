import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private Auth: AuthService,
     private router: Router) {}

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault()
    const target = event.target
    const userName = target.querySelector('#userName').value
    const password = target.querySelector('#password').value

    this.Auth.getUserDetails(userName, password).subscribe(data => {
      if(data.success){
        this.router.navigate(['outlet'])
        this.Auth.setLoggedIn(true)
      }
      else
      {
        window.alert(data.message)
      }
    })
    console.log(userName, password)
  }
}
