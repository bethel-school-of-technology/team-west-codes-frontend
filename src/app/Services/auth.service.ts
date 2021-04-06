import { Injectable } from '@angular/core';
import { Users } from './users';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userEndpoint: string = 'http://localhost:3000/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private myHttp: HttpClient,
    public router: Router
  ) {
  }

  // Sign-up
  signUp(newUser: Users): Observable<any> {
    return this.myHttp.post(this.userEndpoint + "/signup", newUser);
  }

  // Sign-in
  signIn(Username: String, Password: String): Observable<any> {
    let userInfo = {
      Username,
      Password
    }
    return this.myHttp.post(this.userEndpoint + "/login", userInfo);
  }

  //get profile
  getProfile(): Observable<any> {
    let appHeaders = {
      Authorization: localStorage.getItem("logonToken")
    }
    return this.myHttp.get(this.userEndpoint + "/profile", {headers: appHeaders});
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }

  // User profile
  getUserProfile(id): Observable<any> {
    let api = `${this.userEndpoint}/users/profile/${id}`;
    return this.myHttp.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}