import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  imageName: string = '';
  constructor(private http: HttpClient, private router: Router) {}

  inseritem(form: any) {
    // form.imageinput=form.imageinput.name;
    this.http
      .post('https://localhost:44361/api/ItemAuction', form)
      .subscribe((res) => {
        console.log(true);
      });
  }
  uploadImage(form: any) {
    this.http
      .post('https://localhost:44318/api/student/uploadimage', form)
      .subscribe((res: any) => {
        this.imageName = res;
        console.log(this.imageName);
      });
  }
}
