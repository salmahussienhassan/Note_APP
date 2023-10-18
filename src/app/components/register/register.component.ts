import { AuthService } from './../../core/services/auth/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  msg:string=''
  constructor(private _AuthService:AuthService,private _Router:Router){

  }

rgisterForm:FormGroup=new FormGroup(
  {
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(14)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{8,16}$/)]),
    age:new FormControl(null,[Validators.required]),
    phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
  }
 
)

signUpFun(form:FormGroup){

if (form.valid){
 
  this._AuthService.signUp(form.value).subscribe({
    next:((response)=>{
      this._Router.navigate(['/login'])
    
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
