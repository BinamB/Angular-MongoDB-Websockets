import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.css']
})
export class OutletComponent implements OnInit {

  email = "Loading your Info"
  userName = "Loading your Info"
  password = "Loading your Info"

  constructor(private user: UserService, private router: Router) { }

  ngOnInit() {
    this.user.getData().subscribe(data => {
      if(data.status){
        this.email = data.email
        this.userName = data.userName
        this.password = data.password
      }
      else 
      {
        this.router.navigate(['admin'])
      }
   })
  }

}
