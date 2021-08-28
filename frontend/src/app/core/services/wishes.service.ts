import { Injectable } from '@angular/core';
import { Wish } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  constructor() { }
  getWishes():Wish[] {
    var json = window.localStorage.getItem('wishes');
    if (json !== null) {
      return JSON.parse(json);
    } else {
      return []
    }
  }
  addWish(wish:Wish):void {
    var wishes = this.getWishes();
    wishes.push(wish);
    this.updateWishes(wishes)
  }
  updateWishes(wishes:Wish[]) {
    window.localStorage.setItem('wishes',JSON.stringify(wishes));
  }
  deleteWish(index:number) {
    var wishes = this.getWishes();
    wishes.splice(index,1);
    this.updateWishes(wishes)
  }
}
