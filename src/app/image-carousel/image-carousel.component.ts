import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit {
  images = [`assets/top1.jpg`, `assets/top2.jpg`, `assets/top3.jpg`];
  constructor() { }

  ngOnInit() {
  }

}
