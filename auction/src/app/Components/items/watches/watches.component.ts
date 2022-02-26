import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {

  constructor(public item:ItemService) {
    this.item.GetAllItemByCategoryId(42);
   }

  ngOnInit(): void {
  }

}
