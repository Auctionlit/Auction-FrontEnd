import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IItem } from './Components/home/IItems';

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

  itemsByCatId:string|any=[{}];

  constructor(private http: HttpClient, private router: Router) {}

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
    .get<IItem>('https://localhost:44361/api/ItemAuction/getTopCars')
    .subscribe((res: any) => {
      this.cars = res;
      console.log(this.cars);
     
    });
  }

  GetJewelryData(){
    this.http
    .get<IItem>('https://localhost:44361/api/ItemAuction/GetTopJewelry')
    .subscribe((res: any) => {
      this.jewelry = res;
      console.log(this.jewelry);
     
    });
  }
    GetCoinsData(){
      this.http
      .get<IItem>('https://localhost:44361/api/ItemAuction/GetTopCoins')
      .subscribe((res: any) => {
        this.coins = res;
        console.log(this.coins);
       
      });
    }

    GetWatchesData(){
      this.http
      .get<IItem>('https://localhost:44361/api/ItemAuction/GetTopWatches')
      .subscribe((res: any) => {
        this.watches = res;
        console.log(this.watches);
       
      });
    }

    GetMostPopularData(){
      this.http
      .get<IItem>('https://localhost:44361/api/ItemAuction/getMostPopular')
      .subscribe((res: any) => {
        this.popular = res;
        console.log(this.popular);
       
      });
    }
    GetAllData(){
      this.http
      .get<IItem>('https://localhost:44361/api/ItemAuction/GetAllItems')
      .subscribe((res: any) => {
        this.all = res;
        console.log(this.all);
       
      });
    }
    GetItemByCategory(name:string){
      this.http
      .get<IItem>('https://localhost:44361/api/ItemAuction/GetItemByCategory/'+ name)
      .subscribe((res: any) => {
        this.all = res;
        console.log(this.all);
       
      });
    }
    GetItemByName(name:string){
      this.http
      .get<IItem>('https://localhost:44361/api/ItemAuction/GetItemByName/'+ name)
      .subscribe((res: any) => {
        this.all = res;
        console.log(this.all);
      });
    }

    GetAllItemByCategoryId(catId:number){
      this.http
      .get<IItem>('https://localhost:44361/api/ItemAuction/' + catId )
      .subscribe((res: any) => {
        this.itemsByCatId = res;
        console.log(this.itemsByCatId);
       
      });
    }
  
}
