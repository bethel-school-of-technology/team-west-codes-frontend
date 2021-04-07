import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getToken(){
    return localStorage.getItem("logonToken");
  }

  logout(){
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
