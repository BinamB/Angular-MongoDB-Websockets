import { Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
//import { OutletComponent } from '../outlet/outlet.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //writing this is the same as constructor(auth:AuthService){this.auth = auth} 
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registerUser(event){
    console.log("starting resiterUser()")
    event.preventDefault()
    const errors = []
    const target = event.target
    const userName = target.querySelector('#userName').value
    const password = target.querySelector('#password').value
    const confirm = target.querySelector('#confirm').value
    const check = target.querySelector('#check').value
    const email = target.querySelector('#email').value

    console.log("User: "+userName)
    console.log("Email: "+email)
    console.log("password: "+password)


    if (password != confirm){
      errors.push("Passwords Do Not Match")
      console.log("password mismatch!!")
    }

    if (check == false){
      errors.push("Please Confirm Registration")
    }

    //more validation later

    if(errors.length === 0){
      console.log("starting stuff!")
      this.auth.registerUser(userName, email, password).subscribe(data => {
        console.log(data)
        if(data.success){
          this.router.navigate(['login'])
        }
      })
    }
    console.log(userName, email, password)
  }

}
