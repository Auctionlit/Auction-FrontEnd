import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(public item:ItemService) {
    this.item.GetAllItemByCategoryId(21);
   }

  ngOnInit(): void {
  }

}
