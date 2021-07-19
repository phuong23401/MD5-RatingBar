import { Component, OnInit, SimpleChanges } from '@angular/core';
import { IRating } from '../irating';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  max = 10;
  current = 5;

  ratingList: Array<IRating> = [];

  constructor() { }

  ngOnInit(): void {
    this.loadRating();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadRating();
  }

  loadRating() {
    this.ratingList = Array.from({length: this.max}, (_, index) => ({
      value: index + 1,
      active: index < this.current
    }));
  }

  mouseClick(index: number) {
    this.current = index + 1;
    this.ratingList.forEach((item, idx) => item.active = idx < this.current);
  }

  mouseHover(index: number) {
    this.ratingList.forEach((item, idx) => item.active = idx <= index);
  }
}
