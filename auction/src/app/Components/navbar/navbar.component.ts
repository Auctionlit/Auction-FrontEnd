import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemService } from 'src/app/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mySubscription: any;
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
  constructor(public item:ItemService,public router:Router) {
   
  
   }

  ngOnInit(): void {
    
  }
  getvalue() {
    console.log(this.form.value.name);
    this.item.GetItemByName(this.form.value.name);
  }
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
}
