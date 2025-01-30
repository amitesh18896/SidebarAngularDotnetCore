import { Component, OnDestroy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { EmployeeService } from '@app/shared/service/employeeservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  builder = inject(FormBuilder);
  // eslint-disable-next-line @typescript-eslint/naming-convention
  router = inject(Router);
  loginForm = this.builder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });
  error: any;
  isLoading: any;
  f: any;
  constructor(private employeeService: EmployeeService) {}
  onLogin() {
    // eslint-disable-next-line no-debugger
    debugger;
    const userName = this.loginForm.value.userName;
    const password = this.loginForm.value.password;
    this.employeeService.login(userName, password).subscribe((res: any) => {
      console.log(res);
      this.employeeService.storetoken(res.message);
      this.router.navigateByUrl('/report');
    });
  }
}