import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';



import { EmployeeService } from '@app/shared/service/employeeservice';
import { Constants } from '../constants/constants';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private employeeService: EmployeeService) {} // Corrected service name

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.employeeService.gettoken(); // Corrected method name
    // eslint-disable-next-line no-debugger
    // debugger; // Commented out debugger statement
    if (!/^(http|https):/i.test(request.url)) {
      request = request.clone({ url: Constants.API_ENDPOINT + request.url });
    }
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request).pipe(
      catchError((error: any) => {
        console.error('An error occurred:', error);
        return throwError(error);
      })
    );
  }
}
