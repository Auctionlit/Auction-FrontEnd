import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/item.service';
@Component({
  selector: 'app-jewelry',
  templateUrl: './jewelry.component.html',
  styleUrls: ['./jewelry.component.css']
})
export class JewelryComponent implements OnInit {

  constructor(public item:ItemService) {
    this.item.GetAllItemByCategoryId(41);
   }

  ngOnInit(): void {
  }

}
