import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  images = [
    { src: "./../../../assets/images/auction/01.png"},
    {src: "./../../../assets/images/auction/02.png"},
    { src: "./../../../assets/images/auction/03.png"},
    {src: "./../../../assets/images/auction/04.png"},
    { src: "./../../../assets/images/auction/05.png"},
    { src: "./../../../assets/images/auction/06.png"}
  ];
   
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  ngOnInit(): void {
  }

}
