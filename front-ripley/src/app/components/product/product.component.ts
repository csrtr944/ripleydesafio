import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id:number;
  name:string;
  sku:string;
  precioNormal:number;
  precioOferta:number;
  descuento:number;
  ripleyPts:number;
  photo:string;
  descripcion:string;

  constructor(private productService : ProductsService, private route : ActivatedRoute) {

    this.route.params.subscribe(res => {
      this.id = res.id;
    });
   }

  ngOnInit() {

  
    this.productService.getProduct(this.id).subscribe((res:any)=>{

      this.name = res.name;
      this.sku = res.partNumber;
      this.precioNormal = res.prices.listPrice;
      this.precioOferta = res.prices.offerPrice;
      this.descuento = res.prices.discountPercentage;
      this.ripleyPts =res.prices.ripleyPuntos;
      this.photo = res.thumbnailImage;
      this.descripcion = res.longDescription;
      }
    );
  }

}
