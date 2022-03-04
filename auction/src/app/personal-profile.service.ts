import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPersonalProfile } from './IPersonalProfile';
import { FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PersonalProfileService {
userData :any={}
userEmail=localStorage.getItem('username');



  constructor(private http:HttpClient) {
    //this.GetUsersDataByEmail();
    console.log("Email is:" + this.userEmail);
    console.log(this.userData);
    this.GetUsersDataByEmail();

   }


  GetUsersDataByEmail()
  {
     this.http.get<IPersonalProfile[]>('https://localhost:44361/api/users/GetUserByEmail/' + this.userEmail)
     .subscribe((result)=>{this.userData=result })
  }


}
