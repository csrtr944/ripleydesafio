import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : firebase.User;
  constructor(private loginService: LoginService, private router : Router) {
    this.loginService.getUserState().subscribe(data => {
      this.user = data;
    })
   }

  ngOnInit() {
    
  }

  login(form){
    this.loginService.login(form.value.email, form.value.password);
  }

  logout(){
    return this.loginService.logout();
  }
  
}
