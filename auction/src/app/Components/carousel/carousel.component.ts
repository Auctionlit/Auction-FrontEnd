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
    {title: 'First Slide', short: 'First Slide Short', src: "./../../../assets/images/auction/01.png"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "./../../../assets/images/auction/02.png"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "./../../../assets/images/auction/03.png"},
    {title: 'Third Slide', short: 'Forth Slide Short', src: "./../../../assets/images/auction/04.png"},
    {title: 'Third Slide', short: 'Fifth Slide Short', src: "./../../../assets/images/auction/05.png"},
    {title: 'Third Slide', short: 'Sixth Slide Short', src: "./../../../assets/images/auction/06.png"}
  ];
   
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  ngOnInit(): void {
  }

}
