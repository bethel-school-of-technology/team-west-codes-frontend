import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = {
    Username: "",
    Password: ""
  };
  
  constructor(private authService: AuthService, private logRouter: Router) { }
    
  ngOnInit(): void {
  }
  signIn() {
    console.log(this.loginForm);
    this.authService.signIn(this.loginForm.Username, this.loginForm.Password).subscribe(userres => {
      console.log(userres);
      if(userres.status === 200) {
        //window.alert(userres.message);
        localStorage.setItem("logonToken", userres.token);
        this.logRouter.navigate(["/profile"]);
      } else {
        window.alert(userres.message);
      }
    })
  }
}