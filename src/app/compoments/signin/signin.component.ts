import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user ={
    username: '',
    password: ''    
  }
  public identity;
  public token;
  constructor(private authservice: AuthService, private router:Router) { }

  ngOnInit(): void {
    localStorage.getItem('identity');
    localStorage.getItem('token');
  }
  signin(){//signup()
    this.authservice.signin(this.user).subscribe(
      response => {
          console.log(response);
           this.identity = response.usuario;
        if(!this.identity){
          alert(response);
        }else{
          localStorage.setItem('identity',JSON.stringify(this.identity))
          this.authservice.signin(this.user).subscribe(
            response => {
              this.token = response.accessToken;
              if(this.token.length <= 0){
                alert("El token no se ha generado");
              }else{
                localStorage.setItem('token', this.token);
              }
            },
            err=>console.log(err)
          
          )
        }
      },
      err=>console.log(err)
    
    )
  }
}
