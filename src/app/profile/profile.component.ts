import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Users } from '../Services/users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: Users = new Users();

  constructor(private authService: AuthService, private reRouter: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem("logonToken")){
      window.alert("You're not logged in. Please login to continue");
      this.reRouter.navigate(["/login"])
    } else {
    this.authService.getProfile().subscribe(userres => {
      console.log(userres)
      this.currentUser = userres.Username;
      })
    }
  }
}
