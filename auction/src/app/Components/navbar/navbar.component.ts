import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { ItemService } from 'src/app/item.service';

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
  constructor(public item:ItemService,private router: Router) {

   
     }

  ngOnInit(): void {
    
  }
  getvalue() {
    console.log(this.form.value.name);
    this.item.GetItemByName(this.form.value.name);
  }

  reloadCurrentRoute(navTab:string) {
  
    this.router.navigate([navTab])
    .then(() => {
    window.location.reload();
  });
}
}
