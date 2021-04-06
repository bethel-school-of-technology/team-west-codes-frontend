import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Users } from '../Services/users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  newUser: Users = new Users();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  signUp() {
    console.log(this.newUser);
    this.authService.signUp(this.newUser).subscribe(userres => {
      console.log(userres);
    })
  }
}
