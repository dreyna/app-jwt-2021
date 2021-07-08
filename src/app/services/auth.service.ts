import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:3000/api/auth';
  public token;
  constructor(private http: HttpClient, private router: Router) { }

  signin(user){
    return this.http.post<any>(this.URL, user);
  }
 loggedIn(){   
   return !!localStorage.getItem('token');
 }
 getToken(){
   let token = localStorage.getItem('token');
   if(token != undefined){
     this.token = token;
   }else{
     this.token = null;
   }
   return this.token;
 }
 logout() {
  localStorage.removeItem('token');
  this.router.navigate(['/tasks']);
}
}
