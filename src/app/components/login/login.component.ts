import { FacebookLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  msg:string=''
  
  constructor( private _AuthService:AuthService,private _Router:Router, private socialAuthService: SocialAuthService){

  }
  ngOnInit(): void {

    this.socialAuthService.authState.subscribe((user) => {
      this._AuthService.socialUser = user;
      this._AuthService.isLoggedin = user != null;
    });
  }
  loginWithFacebook(): void {
   
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
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
