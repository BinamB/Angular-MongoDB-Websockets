import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userName = ""
  email = ""
  password = ""
  
constructor(private user: UserService, private router:Router) { }

  ngOnInit() {
    this.user.getData().subscribe(data => {
      if(data.status) {
        this.userName = data.userName
        this.email = data.email
        this.password = data.password
      } else {
        this.router.navigate(['logout'])
      }
    })
  }

  updatePassword(event){
  event.preventDefault()
  const errors = []
    const target = event.target
    const npasswsord = target.parentNode.querySelector("#npasswsord").value
    const opassword = target.parentNode.querySelector("#opassword").value
    const confirm = target.parentNode.querySelector("#confirm").value
    
    if (!(npasswsord == "" || opassword == "" || confirm == "")){
      if (npasswsord != confirm){
        errors.push("passwords do not match")
        console.log("password mismatch!")
      }
      if (errors.length === 0){
        console.log("updating password")
      }
    }
  }

  deleteUser(event){
    event.preventDefault()
    //const target = event.target 
    console.log("Deleting User")
    this.user.deleteUser().subscribe(data => {
      if(data.success){
        alert("User Deleted")
      }
      else{
        alert("Something went wrong")
      }
    })
  }

  updateUserName(event){
    console.log("starting function")
    event.preventDefault()
    const errors = []
    const target = event.target
    const nuserName = target.parentNode.querySelector("#nuserName").value

    console.log("new:" + nuserName)
    console.log("old:" + this.userName)


    if (!(nuserName=="" || nuserName==this.userName)){
      if (errors.length === 0){
        console.log("updating User Name")
        this.user.updateUserName(nuserName).subscribe(data => {
          if(data.success){
            alert("UserName Updated!")
          }
          else{
            alert("Some Problem Occured")
          }
        })
      }
    }
  }
}
