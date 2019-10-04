import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../services/products.service';
import { LoginService } from './../../services/login.service';
import { Product } from './../../models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos:any[] = [];
  logged:any;

  constructor(private productService : ProductsService, private loginService: LoginService) {   
    this.getProducts();
    
  }

  ngOnInit() {
      this.loginService.getUserState().subscribe(data=>{
        this.logged = data;
      });
  }


  getProducts(){
    this.productService.getProducts().subscribe((res:any)=>{
      this.productos = res;
  });
  }
  


}
