import { AuthService } from '../../auth.service';	
import { Component, OnInit } from '@angular/core';

@Component({	
  selector: 'app-login',	
  templateUrl: './login.component.html',	
  styleUrls: ['./login.component.css']	
})	
export class LoginComponent implements OnInit {	
  email:any=''	
  password:any=''	
  constructor(public service: AuthService) { }	
  ngOnInit(): void {	
  }	
  authintication(){	
    let object={	
      email:this.email,	
      password:this.password	
    }	

    console.log(this.email)
    console.log(this.password)
    this.service.validToken(object);	
  }	
}	
