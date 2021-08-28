import { Component, OnInit } from '@angular/core';
import { Wish } from '../core/models/profile.model';
import { WishesService } from '../core/services/wishes.service';

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.scss']
})
export class WishesComponent implements OnInit {
  wishes:Wish[] = [];
  constructor(private $wish: WishesService) {
  
  }
  deleteWish(index) {
    this.$wish.deleteWish(index);
    this.wishes = this.$wish.getWishes();
  }
  swapUp(index) {
    if (index > 0) {
      var medium = JSON.parse(JSON.stringify(this.wishes[index]))
      this.wishes[index] = JSON.parse(JSON.stringify(this.wishes[index-1]));
      this.wishes[index-1] = medium
    }
    this.$wish.updateWishes(this.wishes);
    this.wishes = this.$wish.getWishes();
  }
  swapDown(index) {
    if (index < (this.wishes.length-1)) {
      var medium = JSON.parse(JSON.stringify(this.wishes[index]))
      this.wishes[index] = JSON.parse(JSON.stringify(this.wishes[index+1]));
      this.wishes[index+1] = medium
    }
    this.$wish.updateWishes(this.wishes);
    this.wishes = this.$wish.getWishes();
  }
  ngOnInit(): void {
    this.wishes = this.$wish.getWishes();
  }

}
