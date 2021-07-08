import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user ={
    username: '',
    password: ''
  }
  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
    
  }
signup(){//signup()
  alert("Registrar Usuario");
}
}
