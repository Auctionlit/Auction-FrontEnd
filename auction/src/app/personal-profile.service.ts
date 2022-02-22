import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPersonalProfile } from './IPersonalProfile';

@Injectable({
  providedIn: 'root'
})
export class PersonalProfileService {
userData :any={}
userEmail=localStorage.getItem('username');

  constructor(private http:HttpClient) {
    this.GetUsersDataByEmail();
    console.log("Email is:" + this.userEmail);
    console.log(this.userData.value);
   }


  GetUsersDataByEmail()
  {
     this.http.get<IPersonalProfile[]>('https://localhost:44361/api/users/' + this.userEmail).subscribe((result)=>{this.userData=result })
    //this.http.get<IPersonalProfile[]>('https://localhost:44361/api/users/GetAllUsers').subscribe((result)=>{this.userData=result })
  }
}
