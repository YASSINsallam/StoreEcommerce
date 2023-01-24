import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit{
constructor(private product:ProductService){}
  ngOnInit(): void {}
addproductMessage:string|undefined;
  submit(data: product) {
    this.product.addProduct(data).subscribe((res)=>{
      console.warn(res)
      if(res){
        this.addproductMessage="product is successfly add";
      }setTimeout(()=>this.addproductMessage=undefined,3000)

    })
  }
}
