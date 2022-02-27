import { Component, OnInit } from '@angular/core';
import { PersonalProfileService } from 'src/app/personal-profile.service';
import { Router, RouterLink } from '@angular/router';
import { UpdateUserFromDialogComponent } from '../update-user-from-dialog/update-user-from-dialog.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.css']
})
export class PersonalProfileComponent implements OnInit {

  x:any={}
  uName:string|any;
  //this.uName=localStorage.getItem('username')
  constructor(public perProfileService:PersonalProfileService,private router:Router,public updateDialog:MatDialog) { 
    
    this.x=perProfileService.userData;
    this.uName=localStorage.getItem('username');

    //this.updateDialog.closeAll();
  }

  ngOnInit(): void {
    this.uName=localStorage.getItem('username');
    //this.perProfileService.GetUsersDataByEmail();
    
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
