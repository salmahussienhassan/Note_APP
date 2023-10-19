import { AuthService } from 'src/app/core/services/auth/auth.service';

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const routeGuard: CanActivateFn = (route, state) => {
  let _Router=inject(Router)
  let _AuthService=inject(AuthService)
  if(localStorage.getItem('token')!==null || _AuthService.isLoggedin===true)
  {
    return true;
  }
 
  else{
    _Router.navigate(['/login'])
    return false;
  }
};
