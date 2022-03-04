import { Component, OnInit } from '@angular/core';
import { PersonalProfileService } from 'src/app/personal-profile.service';
import { Router, RouterLink } from '@angular/router';
import { UpdateUserFromDialogComponent } from '../update-user-from-dialog/update-user-from-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { ItemService } from 'src/app/item.service';
@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.css']
})
export class PersonalProfileComponent implements OnInit {

  x:any={}
  uName:string|any;
  
  constructor(public perProfileService:PersonalProfileService,private router:Router,public updateDialog:MatDialog,private item:ItemService) { 
    
    this.x=perProfileService.userData;
    this.uName=localStorage.getItem('username');
    this.item.GetUserIdByEmail(this.uName);
    
    
  }

  ngOnInit(): void {
    //this.uName=localStorage.getItem('username');
    
    console.log("The userId is:" + this.item.userID);
  }  

  Logout()
  {
    localStorage.clear();              
    this.router.navigate(['']);    
  }

  OpenUpdateDialog() {
    const dialogRef = this.updateDialog.open(UpdateUserFromDialogComponent);
    }

}
