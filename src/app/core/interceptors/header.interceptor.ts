import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (localStorage.getItem('token')!== null ){
      const token:any='3b8ny__'+localStorage.getItem('token')

   request=request.clone({
        headers:request.headers.set('token',token)  
      })
console.log('hi')
      return next.handle(request);
    }
else{
  return next.handle(request);
}

  }
}
