import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemService } from 'src/app/item.service';
import { InsertBidComponent } from '../../insert-bid/insert-bid.component';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {

  constructor(public item:ItemService , public dialog:MatDialog) {
    this.item.GetAllItemByCategoryId(42);
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
