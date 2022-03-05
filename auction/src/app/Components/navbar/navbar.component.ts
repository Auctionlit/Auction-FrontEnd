import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemService } from 'src/app/item.service';

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
  constructor(public item:ItemService) {
   
  
   }

  ngOnInit(): void {
    
  }
  getvalue() {
    console.log(this.form.value.name);
    this.item.GetItemByName(this.form.value.name);
  }
}
