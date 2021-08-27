import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Autoplay } from 'swiper'

SwiperCore.use([Navigation, Autoplay]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
