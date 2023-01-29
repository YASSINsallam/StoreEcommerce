import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { faTrash ,faEdit,faPlus} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
 
  constructor(private product:ProductService){}
  productList:undefined | product[]
  deletMessage: undefined | string;
  icon=faTrash;
  editicone=faEdit;
  plusicone=faPlus;

  ngOnInit(): void {
    this.List()
    
    
  }
  deleteProuduct(id:number){
    console.warn(" test id",id);
    this.product. deleteProduct(id).subscribe((res)=>{
      if(res){ this.deletMessage="successfly delete";}
     this.List()
    })
    setTimeout(()=>this.deletMessage=undefined,3000)
  }
  List(){
    this.product. productList().subscribe((res)=>{ 
      console.warn(res)
      this.productList=res;
    })
    
  }

  }

