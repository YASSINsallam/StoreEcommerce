import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { HttpClient,} from '@angular/common/http';


@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit{
  selectedFile :File= new File([], "default.png");
constructor(private product:ProductService , private http:HttpClient){}
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
  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
  }
  onSubmit() {
    const formData = new FormData();
    if(this.selectedFile){
      formData.append('image', this.selectedFile);
      this.http.post('http://localhost:3000/products', formData)
        .subscribe(res => {
            console.log(res);
        });
    }else{
      console.log("Please select a file")
    }
} }
    