import { routeGuard } from './core/guard/route.guard';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { BlankComponent } from './layout/blank/blank.component';
import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layout/auth/auth.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

{path:'',component:AuthComponent, 
children:[
  {path:'',redirectTo:'login', pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent}
]},

{path:'',component:BlankComponent ,
children:[
  {path:'home',component:HomeComponent,canActivate:[routeGuard]}
]},

{path:'**',component:NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
