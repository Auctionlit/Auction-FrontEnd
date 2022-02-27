import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-update-user-from-dialog',
  templateUrl: './update-user-from-dialog.component.html',
  styleUrls: ['./update-user-from-dialog.component.css']
})
export class UpdateUserFromDialogComponent implements OnInit {
  
  form = new FormGroup({
    
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    userid: new FormControl('', [Validators.required])
  });

  constructor(public item:ItemService) {
    // const dialogRef = this.updateDialog.open(UpdateUserFromDialogComponent );
    // dialogRef.close(); 

    
    
   }

  ngOnInit(): void {
    
  }

  GetUpdatedData()
  {
    this.item.UpdateUserProfileById(this.form.value);
  }

}
