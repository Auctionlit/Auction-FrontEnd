import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ItemService } from 'src/app/item.service';
import { PersonalProfileService } from 'src/app/personal-profile.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  uName:string|any='';
  adminDashStatistics:string|any;
  profileDisplay=true;
  EmpFormDisplay=true;

  constructor(private router:Router,public item:ItemService,private perProfileService:PersonalProfileService) { 
    
    console.log("uName");
    item.GetItemBidsStatistics_AdminDash();
    item.GetBidPriceAndExpireDate_AdminDash();
    item.GetCategoryNameAndNumberOfBids_AdminDash();
    item.GetNoOfItemsNotInBid_AdminDash();
    item.GetNoOfItemsInBid_AdminDash();
    
  }

  ngOnInit(): void {
    this.uName=localStorage.getItem('username');
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
    this.EmpFormDisplay=true;
  }

  AddNewEmployee()
  {
     this.EmpFormDisplay=false;
  }
}
