import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ItemService } from 'src/app/item.service';
import { PersonalProfileService } from 'src/app/personal-profile.service';
@Component({
  selector: 'app-accountant-dashboard',
  templateUrl: './accountant-dashboard.component.html',
  styleUrls: ['./accountant-dashboard.component.css']
})
export class AccountantDashboardComponent implements OnInit {

  uName:string|any='';
  profileDisplay=true;

  constructor(private router:Router,private perProfileService:PersonalProfileService,public item:ItemService) { 
    this.uName=localStorage.getItem('username')
    item.GetItemBidsStatistics_AdminDash();
    item.GetBidPriceAndExpireDate_AdminDash();
    item.GetCategoryNameAndNumberOfBids_AdminDash();
    item.GetNoOfItemsNotInBid_AdminDash();
    item.GetNoOfItemsInBid_AdminDash();
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
  }

  HideProfileAndEmpData()
  {
    this.profileDisplay=true;
    
  }

}
