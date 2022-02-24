import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router:Router) {}

  validToken(form: any) {
    const headerDict = {
      'Content-Type': 'Application/json',
      Accept: 'Application/json',
    };
    const requstOptions = {
      headers: new HttpHeaders(headerDict),
    };

    this.http
      .post('https://localhost:44361/api/jwt', form, requstOptions)
      .subscribe(
        (result) => {
          const response = {
            token: result.toString(),
          };
          let object: any = jwt_decode(response.token);
          console.log(response.token);
          console.log(object)
          localStorage.setItem('Role', object.role);
          localStorage.setItem('username', object.unique_name);
          if (object.role == '1') {
            this.router.navigate(['dashboard/Admin/']);
          }
          
          if (object.role == '2') {
            this.router.navigate(['dashboard/User/']);
          }
          
          if (object.role == '41') {
            this.router.navigate(['dashboard/Accountant/']);
          }
        },
        (x) => {
          console.log('wrong usernmae');
        }
      );
  }
}