import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  constructor(public item:ItemService) {
    this.item.GetAllItemByCategoryId(22);
   }

  ngOnInit(): void {
  }

}
