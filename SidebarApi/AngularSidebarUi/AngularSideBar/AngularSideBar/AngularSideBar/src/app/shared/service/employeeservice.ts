import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiEndpointsService } from '@app/core/service/api-endpoints.service';
import { ApiHttpService } from '@app/core/service/api-http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  authToken: string;

  constructor(
   // private apiHttpService: ApiHttpService,
    private apiEndPointService: ApiEndpointsService,
    private http: HttpClient
  ) {}

  getEmployeeData(): Observable<any> {
    // eslint-disable-next-line no-debugger
    debugger;
    const dataURL = this.apiEndPointService.getEmployeeDataEndpoint();
    this.gettoken();
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: 'Bearer ' + localStorage.getItem('token')
      })
    };

    return this.http.get<any>(dataURL, httpOptions).pipe(
      catchError((error: any) => {
        console.error('An error occurred while fetching employee data:', error);
        return throwError(
          'An error occurred while fetching employee data. Please try again later.'
        );
      })
    );
  }
  storetoken(tokenvalue: string) {
    // eslint-disable-next-line no-debugger
    debugger;
    localStorage.setItem('token', tokenvalue);
  }
  gettoken() {
    // eslint-disable-next-line no-debugger
    debugger;
    return localStorage.getItem('token');
  }
  islockedin(): boolean {
    return !!localStorage.getItem('token');
  }
  login(userName: string, password: string): Observable<{ token: string }> {
    // eslint-disable-next-line no-debugger
    debugger;
    const dataURL = this.apiEndPointService.loginEndpoint();
    return this.http
      .post<{ token: string }>(dataURL, { userName, password })
      .pipe(
        catchError((error: any) => {
          console.error('An error occurred while logging in:', error);
          return throwError(
            'An error occurred while logging in. Please try again later.'
          );
        })
      );
  }
}

