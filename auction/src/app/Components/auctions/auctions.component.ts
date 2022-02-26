import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {

  test:any;
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor(public item:ItemService) {
    this.item.GetAllData();
  }

  ngOnInit(): void {
  }

  getvalue() {
    console.log(this.form.value.name);
    this.item.GetItemByName(this.form.value.name);
  }

  auctionHandel(event:any){
    let pro =event.target.value;
    let x = pro.toString();
    console.log(x);
    
    if(x == 'all'){
      this.item.GetAllData();
    }else{
      this.item.GetItemByCategory(x);
    }

  }
}
