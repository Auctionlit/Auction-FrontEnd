import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemService } from 'src/app/item.service';
@Component({
  selector: 'app-payment-cart',
  templateUrl: './payment-cart.component.html',
  styleUrls: ['./payment-cart.component.css']
})
export class PaymentCartComponent implements OnInit {
  uId:number|any;
  uName:string|any;
  creditCardForm=new FormGroup({
    userId: new FormControl(this.item.userID,Validators.required),
    iban: new FormControl('',[Validators.required,Validators.maxLength(16)]),
    cvv: new FormControl('',[Validators.required,Validators.maxLength(3)]),
    holdername: new FormControl('',Validators.required),
    expiredate:new FormControl('',Validators.required)
});
 
  constructor(public item:ItemService) { 

    this.uName=localStorage.getItem('username');
    item.GetUserIdByEmail(this.uName);
    console.log("The userId is:" + this.item.userID);
    console.log(this.creditCardForm.value);
    
  }

 
     
  ngOnInit(): void {
    this.item.GetUserIdByEmail(this.uName);
  }

  GetCreditCardData()
  {
    this.item.InsertCreditCard(this.creditCardForm.value)
    console.log(this.creditCardForm.value);
    //this.creditCardForm.reset();
  }

  // CardNoCheck(email:string):string{
  //   let creditInput = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9])/; 
  //   if (creditInput.test(email)){
          
  //         return 'accepted';}
  //         else
  //         return 'Please input correct card No format';
  //   }


}
