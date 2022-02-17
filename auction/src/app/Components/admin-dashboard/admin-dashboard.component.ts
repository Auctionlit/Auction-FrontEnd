import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

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
