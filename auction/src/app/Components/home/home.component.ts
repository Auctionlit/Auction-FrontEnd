import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { ItemService } from 'src/app/item.service';
import { InsertBidComponent } from '../insert-bid/insert-bid.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public item:ItemService, public dialog: MatDialog,private router:Router) { 

    this.item.GetCarsData();
    this.item.GetCoinsData();
    this.item.GetMostPopularData();
    this.item.GetWatchesData();
    this.item.GetJewelryData();
  }

  ngOnInit(): void {
    
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
