import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-accountant-dashboard',
  templateUrl: './accountant-dashboard.component.html',
  styleUrls: ['./accountant-dashboard.component.css']
})
export class AccountantDashboardComponent implements OnInit {

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
