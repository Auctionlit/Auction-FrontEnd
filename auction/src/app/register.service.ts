import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient ,private router:Router) {}

  inserUser(form: any) {
    this.http.post('https://localhost:44361/api/users', form).subscribe((res) => {
    if(res == true){
      console.log(true);    
      this.router.navigate(['/account/login']);
    }else{
      console.log(false);
    }    
    });
  }
}
