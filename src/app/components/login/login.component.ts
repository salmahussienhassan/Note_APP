import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  msg:string=''
 
  constructor(  private _AuthService:AuthService,private _Router:Router, ){

  }
  
loginForm:FormGroup=new FormGroup(
  {
   
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{8,16}$/)]),
  
  }
 
)

loginFun(form:FormGroup){

if (form.valid){
 
  this._AuthService.login(form.value).subscribe({
    next:((response)=>{
      this._Router.navigate(['/home'])
    localStorage.setItem('token',response.token)
      this.msg=response.msg
console.log(response)
    }),
    error:(err)=>{

      this.msg=err.error.msg
      console.log(err.error.msg)
    }
  })
  
}
}

}
