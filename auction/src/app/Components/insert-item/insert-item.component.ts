import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { InsertItemFormDialogComponent } from '../insert-item-form-dialog/insert-item-form-dialog.component';
import { UpdateUserFromDialogComponent } from '../update-user-from-dialog/update-user-from-dialog.component';
@Component({
  selector: 'app-insert-item',
  templateUrl: './insert-item.component.html',
  styleUrls: ['./insert-item.component.css']
})
export class InsertItemComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(InsertItemFormDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  
  
  
}
