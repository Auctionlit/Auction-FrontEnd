import { Component, OnInit } from '@angular/core';
import { PersonalProfileService } from 'src/app/personal-profile.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.css']
})
export class PersonalProfileComponent implements OnInit {

  x:any={}
  uName:string|any;
  //this.uName=localStorage.getItem('username')
  constructor(public perProfileService:PersonalProfileService,private router:Router) { 
    
    this.x=perProfileService.userData;
    this.uName=localStorage.getItem('username');
    
    
    
  }

  ngOnInit(): void {
    this.uName=localStorage.getItem('username');
    //this.perProfileService.GetUsersDataByEmail();
    
  }  

  Logout()
  {
    localStorage.clear();              
    this.router.navigate(['']);    
  }

}
