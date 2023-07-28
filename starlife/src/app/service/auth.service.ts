import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})


export class AuthService  {

  private apiUrl = 'http://localhost:3100/users';
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  static logout: any;
  constructor(private http: HttpClient) {}
  
 //get the userlogin list
  loginUser():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl)
   }
   
   //is authenticated for authguard
    isAuthenticated(): boolean {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    return userData.email && userData.password;
  }
    
  // get the user from id
  //  singleUser(id: number){
  //   return this.http.get(`http://localhost:3100/users?id=${id}`);
  // }
  singleUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}?id=${id}`);
  }
 
  // remove data from localstoraage
  logout() {
    this.loggedIn.next(true);
    localStorage.removeItem('userData');
  }
}

