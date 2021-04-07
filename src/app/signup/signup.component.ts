import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Users } from '../Services/users';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  newUser: Users = new Users();

  constructor(private authService: AuthService, private logRouter: Router) { }

  ngOnInit(): void {
  }
  signUp() {
    console.log(this.newUser);
    this.authService.signUp(this.newUser).subscribe(userres => {
      console.log(userres);
      if(userres.status === 200) {
        //window.alert(userres.message);
        this.logRouter.navigate(["/login"]);
      } else {
        window.alert(userres.message);
      }
    })
  }
}