import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorAuth:any;
  constructor(private service : LoginService) { }

  ngOnInit() {
  }
  
  crearUsuario(form){
  
    this.service.crearUser(form.value);
  }

}
