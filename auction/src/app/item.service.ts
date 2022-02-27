import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IItem } from './Components/home/IItems';
import { UpdateUserFromDialogComponent } from './Components/update-user-from-dialog/update-user-from-dialog.component';
import { PersonalProfileService } from './personal-profile.service';
@Injectable({
  providedIn: 'root',
})
export class ItemService {
  imageName: string = '';
  cars:string|any=[{}];
  jewelry:string|any=[{}];
  coins:string|any=[{}];
  watches:string|any=[{}];
  popular:string|any=[{}];
  all:string|any=[{}];
  userID:string='';
  itemsByCatId:string|any=[{}];

  uEmail=localStorage.getItem("username");

  constructor(private http: HttpClient, private router: Router) {
    console.log("Email in constructor is:" + this.uEmail)
    this.GetUserIdByEmail(this.uEmail);
  }

  inseritem(form: any) {
    form.imgpath=this.imageName;
    form.catId = parseInt(form.catId);
    this.http
      .post('https://localhost:44361/api/ItemAuction', form)
      .subscribe((res) => {
        console.log(true);
      });
  }
  
  uploadImage(form: any) {
    this.http
      .post('https://localhost:44361/api/ItemAuction/uploadimage', form)
      .subscribe((res: any) => {
        this.imageName = res.imgPath;
        console.log(this.imageName);
      });
  }


  GetCarsData(){
    this.http
    .get<IItem[]>('https://localhost:44361/api/ItemAuction/getTopCars')
    .subscribe((res: any) => {
      this.cars = res;
      console.log(this.cars);
     
    });
  }

  GetJewelryData(){
    this.http
    .get<IItem[]>('https://localhost:44361/api/ItemAuction/GetTopJewelry')
    .subscribe((res: any) => {
      this.jewelry = res;
      console.log(this.jewelry);
     
    });
  }
    GetCoinsData(){
      this.http
      .get<IItem[]>('https://localhost:44361/api/ItemAuction/GetTopCoins')
      .subscribe((res: any) => {
        this.coins = res;
        console.log(this.coins);
       
      });
    }

    GetWatchesData(){
      this.http
      .get<IItem[]>('https://localhost:44361/api/ItemAuction/GetTopWatches')
      .subscribe((res: any) => {
        this.watches = res;
        console.log(this.watches);
       
      });
    }

    GetMostPopularData(){
      this.http
      .get<IItem[]>('https://localhost:44361/api/ItemAuction/getMostPopular')
      .subscribe((res: any) => {
        this.popular = res;
        console.log(this.popular);
       
      });
    }
    GetAllData(){
      this.http
      .get<IItem[]>('https://localhost:44361/api/ItemAuction/GetAllItems')
      .subscribe((res: any) => {
        this.all = res;
        console.log(this.all);
       
      });
    }
    GetItemByCategory(name:string){
      this.http
      .get<IItem[]>('https://localhost:44361/api/ItemAuction/GetItemByCategory/'+ name)
      .subscribe((res: any) => {
        this.all = res;
        console.log(this.all);
       
      });
    }
    GetItemByName(name:string){
      this.http
      .get<IItem[]>('https://localhost:44361/api/ItemAuction/GetItemByName/'+ name)
      .subscribe((res: any) => {
        this.all = res;
        console.log(this.all);
      });
    }

    GetAllItemByCategoryId(catId:number){
      this.http
      .get<IItem[]>('https://localhost:44361/api/ItemAuction/' + catId )
      .subscribe((res: any) => {
        this.itemsByCatId = res;
        console.log(this.itemsByCatId);
       
      });
    }
<<<<<<< HEAD


     GetUserIdByEmail(uEmail:string|any)
     {
      this.http
      .get('https://localhost:44361/api/users/GetUserIdByEmail/'+ uEmail)
      .subscribe((res: any) => {
        this.userID = res;
        console.log(this.userID);
      });

     }

      UpdateUserProfileById(form:any){
        form.userid=this.userID;
        console.log("*****************" + form.userid);
        const headersDisc={
          'content-type':'application/json',
          'Accept':'application/json'
        };
        const requestOptions={
          headers:new HttpHeaders(headersDisc),
        };
          
        this.http.put('https://localhost:44361/api/users/UpdateUserProfile',form,requestOptions)
        .subscribe((res)=>{
        console.log("User Profile Updated**");
        });
    }

    
  
=======
  insertbid(form:any){
    form.userId = parseInt(form.userId);
    form.itemId = parseInt(form.itemId)
    console.log('done' , form);
    this.http
      .post('https://localhost:44361/api/bid',form)
      .subscribe((res: any) => {
        console.log(true);
       
      });
  }
>>>>>>> b6eb91ff6ee3733b30eaaf98a0d27d61fa844b9b
}
