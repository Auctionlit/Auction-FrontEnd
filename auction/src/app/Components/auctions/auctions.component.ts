import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ItemService } from 'src/app/item.service';
import { InsertBidComponent } from '../insert-bid/insert-bid.component';

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

  constructor(public item:ItemService ,public dialog: MatDialog) {
    this.item.GetAllData();
    this.item.GetMost3PopularData();
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

  openDialog(itemId:any) {
    const dialogRef = this.dialog.open(InsertBidComponent);
    console.log(itemId);
    localStorage.setItem('itemId',itemId);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
