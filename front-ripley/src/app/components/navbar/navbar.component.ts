import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from './../../services/login.service';
import { take, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  authValue:any;
  constructor(private loginService : LoginService, private router:Router, private afsAuth: AngularFireAuth ) {

   }

  ngOnInit() {
    
    this.afsAuth.authState.subscribe(res=>{
      this.authValue = res;
    });
  }

  logout(){
    this.loginService.logout();
  }
}
