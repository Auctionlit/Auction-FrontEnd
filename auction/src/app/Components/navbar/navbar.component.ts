import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { ItemService } from 'src/app/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mySubscription: any;
  homeTab:string="/";
  auctionTab:string="/auction";
  signInTab:string="/account/login";
  signUpTab:string="/account/register";
  aboutusTab:string="/aboutus";
  contactTab:string="/contact";
  dashboardTab:string="/account/login";

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
<<<<<<< HEAD
  constructor(public item:ItemService,private router: Router) {

=======
  constructor(public item:ItemService,public router:Router) {
>>>>>>> 8a7628bdc4f0247ca31c61fd69682987c69b5cc8
   
     }

  ngOnInit(): void {
    
  }
  getvalue() {
    console.log(this.form.value.name);
    this.item.GetItemByName(this.form.value.name);
  }
<<<<<<< HEAD

  reloadCurrentRoute(navTab:string) {
  
    this.router.navigate([navTab])
    .then(() => {
    window.location.reload();
  });
}
=======
  root(){
    if (localStorage.getItem("Role")== '1') {
      this.router.navigate(['dashboard/Admin/']);
    }
    
    if (localStorage.getItem("Role")== '2') {
      this.router.navigate(['dashboard/User/']);
    }
    
    if (localStorage.getItem("Role")== '41') {
      this.router.navigate(['dashboard/Accountant/']);
    }
  }
>>>>>>> 8a7628bdc4f0247ca31c61fd69682987c69b5cc8
}
