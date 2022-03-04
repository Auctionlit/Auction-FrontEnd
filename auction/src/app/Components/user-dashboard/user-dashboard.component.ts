import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ItemService } from 'src/app/item.service';
import { PersonalProfileService } from 'src/app/personal-profile.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  uName:string|any='';
  profileDisplay=true;
  newItemDisplay=true;
  paymentMethodDisplay=true;
 

  constructor(private router:Router,private perProfileService:PersonalProfileService,private item:ItemService) { 
    this.uName=localStorage.getItem('username')
    console.log("uName");
   
  }

  ngOnInit(): void {
    this.perProfileService.GetUsersDataByEmail();
  }

  Logout()
  {
    localStorage.clear();              
    this.router.navigate(['']);        
    
  }

  DisplayProfileData()
  {
    this.profileDisplay=false;
    // this.item.GetUserIdByEmail("uName");
    
  }

  HideProfileAndItemData()
    {
    this.profileDisplay=true;
    this.newItemDisplay=true;
    this.paymentMethodDisplay=true;
  }

  DispalyAddNewItem(){
    this.newItemDisplay=false;

  }
  DisplayPaymentMethod()
  {
    this.paymentMethodDisplay=false;
    // this.item.GetUserIdByEmail("uName");
    
  }

}