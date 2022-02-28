import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemService } from 'src/app/item.service';
import { InsertBidComponent } from '../../insert-bid/insert-bid.component';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  constructor(public item:ItemService , public dialog:MatDialog) {
    this.item.GetAllItemByCategoryId(22);
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
