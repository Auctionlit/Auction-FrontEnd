import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PersonalProfileService } from 'src/app/personal-profile.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  uName:string|any='';
 

  constructor(private router:Router,private perProfileService:PersonalProfileService) { 
    
    console.log("uName");
   
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

  // GetProfileData()
  // {
  //   this.uName=localStorage.getItem('username');
  // }

}
