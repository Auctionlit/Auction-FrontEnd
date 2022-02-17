import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  uName:string|any='';
 

  constructor(private router:Router) { 
    this.uName=localStorage.getItem('username')
    console.log("uName");
   
  }

  ngOnInit(): void {
  }

  Logout()
  {
    localStorage.clear();              
    this.router.navigate(['']);        
    
  }

}