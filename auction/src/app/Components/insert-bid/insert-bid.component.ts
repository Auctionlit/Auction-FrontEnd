import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-insert-bid',
  templateUrl: './insert-bid.component.html',
  styleUrls: ['./insert-bid.component.css']
})
export class InsertBidComponent implements OnInit {

  form = new FormGroup({
    price: new FormControl('', [Validators.required]),
    userId: new FormControl(localStorage.getItem('userId'), [Validators.required]),
    itemId: new FormControl(localStorage.getItem('itemId'), [Validators.required]),

  });
  constructor(public item:ItemService) { }

  ngOnInit(): void {
  }

  getvalue() {
    let myBidForm = this.form.value;
    console.log(myBidForm);
    this.item.insertbid(myBidForm);
  }

}
