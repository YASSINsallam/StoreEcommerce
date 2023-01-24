import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { signUp,login } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  showLogin:boolean=true
  authError:string="";
  constructor( private http:HttpClient,private user:UserService){}
  ngOnInit(): void {
     this.user.userAuthReload();
  }
  signUp(data : signUp){
    console.warn(data)
    this.user.usersignUp(data);
  }
  login(data: login) {
    this.user.userLogin(data)
    this.user.invalidUserAuth.subscribe((result)=>{
      console.warn(result);
      if(result){
         this.authError="User not found"
      }else{
        // this.localCartToRemoteCart();
      }
      
    })
  }
  openSignUp(){
    this.showLogin=false
  }
  openLogin(){
this.showLogin=true;
  }


}
