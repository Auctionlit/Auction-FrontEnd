import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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
 

  constructor(private router:Router,private perProfileService:PersonalProfileService) { 
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
  }

  HideProfileAndItemData()
    {
    this.profileDisplay=true;
    this.newItemDisplay=true;
  }

  AddNewItem(){
    this.newItemDisplay=false;

  }

}