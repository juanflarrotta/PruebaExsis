import { Component, OnInit } from '@angular/core';
import { NgImageSliderModule, NgImageSliderComponent } from 'ng-image-slider';
import { ViewChild } from '@angular/core'
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @ViewChild('nav') slider: NgImageSliderComponent;
  imageObject: Array<object> = [
    {
      thumbImage: '../../../assets/images/imagen1.jpg',
      alt: 'alt of image',
    },
    {
      thumbImage: '../../../assets/images/imagen2.jpg',
      alt: 'alt of image',
    },
    {
      thumbImage: '../../../assets/images/imagen3.jpg',
      alt: 'alt of image',
    },
  ];
 
  constructor() {}

  ngOnInit(): void {}
}
