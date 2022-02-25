import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public item:ItemService) { 

    this.item.GetCarsData();
    this.item.GetCoinsData();
    this.item.GetMostPopularData();
    this.item.GetWatchesData();
    this.item.GetJewelryData();


  }

  ngOnInit(): void {
  }

}
