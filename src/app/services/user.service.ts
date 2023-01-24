import { HttpClient } from '@angular/common/http';
import { EventEmitter,Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { signUp,login } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  invalidUserAuth= new EventEmitter<boolean>(false)

  constructor( private http:HttpClient,private router:Router) { }
  usersignUp(user:signUp){
    this.http.post(`http://localhost:3000/user`,user,{observe:`response`}).subscribe((res)=>{
      console.warn(res);
      if(res){
        localStorage.setItem('user',JSON.stringify(res.body));
        this.router.navigate(['/']);
      }
    })

  }
  userLogin(data:login){
    this.http.get<signUp[]>(`http://localhost:3000/user?email=${data.email}&password=${data.password}`,
    {observe:'response'}
    ).subscribe((result)=>{
      if(result && result.body?.length){
        localStorage.setItem('user',JSON.stringify(result.body[0]));
        this.router.navigate(['/']);
        this.invalidUserAuth.emit(false)
      }else{  
        this.invalidUserAuth.emit(true)
      }
    })
  }
  userAuthReload(){
    if(localStorage.getItem(`user`)){
      this.router.navigate(['/']);
    }
  }

  
}
