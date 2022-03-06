import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  popular3:string|any=[{}];
  all:string|any=[{}];
  userID:number=0;
  itemsByCatId:string|any=[{}];
  adminDashbard1:string|any=[{}];
  adminDashbard2:string|any=[{}];
  adminDashbard3:string|any=[{}];
  adminDashbard4:string|any={};
  adminDashbard5:string|any={};
  userBids:any=[{}];
  EndedItems:any=[{}];
  userItems:any=[{}];
  userItemsWin:any=[{}];
  userItemsBid:any=[{}];
  

  uEmail = localStorage.getItem('username');

  
  
    constructor(private http: HttpClient, private router: Router,private toastr: ToastrService) {
    console.log('Email in constructor is:' + this.uEmail);
    this.GetUserIdByEmail(this.uEmail);
  }

  inseritem(form: any) {
    form.imgpath = this.imageName;
    form.userid=parseInt(form.userid);
    form.catId = parseInt(form.catId);
    console.log(form);
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

  GetCarsData() {
    this.http
      .get<IItem[]>('https://localhost:44361/api/ItemAuction/getTopCars')
      .subscribe((res: any) => {
        this.cars = res;
        console.log(this.cars);

      });
  }

  GetJewelryData() {
    this.http
      .get<IItem[]>('https://localhost:44361/api/ItemAuction/GetTopJewelry')
      .subscribe((res: any) => {
        this.jewelry = res;
        console.log(this.jewelry);

      });
  }
  GetCoinsData() {
    this.http
      .get<IItem[]>('https://localhost:44361/api/ItemAuction/GetTopCoins')
      .subscribe((res: any) => {
        this.coins = res;
        console.log(this.coins);

      });
  }

  GetWatchesData() {
    this.http
      .get<IItem[]>('https://localhost:44361/api/ItemAuction/GetTopWatches')
      .subscribe((res: any) => {
        this.watches = res;
        console.log(this.watches);

      });
  }

  GetMostPopularData() {
    this.http
      .get<IItem[]>('https://localhost:44361/api/ItemAuction/getMostPopular')
      .subscribe((res: any) => {
        this.popular = res;
        console.log(this.popular);

      });
  }

  GetMost3PopularData() {
    this.http
      .get<IItem[]>('https://localhost:44361/api/ItemAuction/getMostPopular')
      .subscribe((res: any) => {
        this.popular3 = res;
        console.log(this.popular3);

      });
    }
    
  GetAllData() {
    this.http
      .get<IItem[]>('https://localhost:44361/api/ItemAuction/GetAllItems')
      .subscribe((res: any) => {
        this.all = res;
        console.log(this.all);

      });
  }
  GetItemByCategory(name: string) {
    this.http
      .get<IItem[]>(
        'https://localhost:44361/api/ItemAuction/GetItemByCategory/' + name
      )
      .subscribe((res: any) => {
        this.all = res;
        console.log(this.all);

      });
  }
  GetItemByName(name: string) {
    this.http
      .get<IItem[]>(
        'https://localhost:44361/api/ItemAuction/GetItemByName/' + name
      )
      .subscribe((res: any) => {
        this.all = res;
        console.log(this.all);
      });
  }

  GetAllItemByCategoryId(catId: number) {
    this.http
      .get<IItem[]>('https://localhost:44361/api/ItemAuction/' + catId)
      .subscribe((res: any) => {
        this.itemsByCatId = res;
        console.log(this.itemsByCatId);

      });
    }
  
    GetUserIdByEmail(uEmail:string|any) {
    this.http
      .get('https://localhost:44361/api/users/GetUserIdByEmail/' + uEmail)
      .subscribe((res: any) => {
        this.userID = res.userId;
        console.log(this.userID);
      });

  }

      UpdateUserProfileById(form:any){
        form.userid=this.userID;
        console.log("*****************" + this.userID);
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
        alert("User Profile Updated");
        });
    }

  GetItemBidsStatistics_AdminDash()
     {
      this.http
      .get('https://localhost:44361/api/bid/GetItemBidsStatistics_AdminDash')
      .subscribe((res1: any) => {
        this.adminDashbard1 = res1;
        console.log(this.adminDashbard1);
      });

     }


     GetBidPriceAndExpireDate_AdminDash()
     {
      this.http
      .get('https://localhost:44361/api/bid/GetBidPriceAndExpireDate_AdminDash')
      .subscribe((res2: any) => {
        this.adminDashbard2 = res2;
        console.log(this.adminDashbard2);
      });
     }

     GetCategoryNameAndNumberOfBids_AdminDash()
     {
      this.http
      .get('https://localhost:44361/api/bid/GetCategoryNameAndNumberOfBids_AdminDash')
      .subscribe((res3: any) => {
        this.adminDashbard3 = res3;
        console.log(this.adminDashbard3);
      });
     }


     GetNoOfItemsNotInBid_AdminDash()
     {
      this.http
      .get('https://localhost:44361/api/bid/GetNoOfItemsNotInBid_AdminDash')
      .subscribe((res4: any) => {
        this.adminDashbard4 = res4;
        console.log(this.adminDashbard4);
      });
     }

     GetNoOfItemsInBid_AdminDash()
     {
      this.http
      .get('https://localhost:44361/api/bid/GetNoOfItemsInBid_AdminDash')
      .subscribe((res5: any) => {
        this.adminDashbard5 = res5;
        console.log(this.adminDashbard5);
      });
     }

     GetUserBids(custId:number) {
      this.http
        .get<IItem[]>('https://localhost:44361/api/ItemAuction/getitembyCustId/'+ custId)
        .subscribe((res: any) => {
          this.userBids = res;
          console.log(this.userBids);
  
        });
    }
    GetEndedItems()
    {
     this.http
     .get('https://localhost:44361/api/users/GetItemEnded')
     .subscribe((res: any) => {
       this.EndedItems = res;
       console.log(this.EndedItems);
     });
    }
    GetCountOfItem(uId:number)
    {
     this.http
     .get('https://localhost:44361/api/users/GetCountOfItem/'+ uId)
     .subscribe((res: any) => {
       this.userItems = res;
       console.log(this.userItems);
     });
    }
    GetCountOfwin(uId:number)
    {
     this.http
     .get('https://localhost:44361/api/users/GetCountOfwen/'+ uId)
     .subscribe((res: any) => {
       this.userItemsWin = res;
       console.log(this.userItemsWin);
     });
    }
    GetCountOfBids(uId:number)
    {
     this.http
     .get('https://localhost:44361/api/users/GetCountOfBids/'+ uId)
     .subscribe((res: any) => {
       this.userItemsBid = res;
       console.log(this.userItemsBid);
     });
    }


  insertbid(form: any) {
    if (form.userId == null){
      this.toastr.error('You are Not LogedIn ', 'Login', { timeOut: 5000 });
      this.router.navigate(['/account/login']);
      
    }else{

      form.userId = parseInt(form.userId);
      form.itemId = parseInt(form.itemId);
      console.log('done', form);
      this.http
        .post('https://localhost:44361/api/bid', form)
        .subscribe((res: any) => {
          console.log(true);
          this.toastr.success('Bid Completed', 'Bid', { timeOut: 5000 });
        });
    }
  }



  InsertCreditCard(creditCardForm:any) {
    creditCardForm.creditCVC=parseInt(creditCardForm.creditCVC);
  console.log(creditCardForm);
    const headersDisc={
      'content-type':'application/json',
      'Accept':'application/json'
    };
    const requestOptions={
      headers:new HttpHeaders(headersDisc),
    };
      this.http
        .post('https://localhost:44361/api/CreditCard/InserCreditCard', creditCardForm,requestOptions)
        .subscribe((res: any) => {
          console.log(creditCardForm);
          console.log("Credit Card Added seccessfully");
          
        });

        
    }
  }


