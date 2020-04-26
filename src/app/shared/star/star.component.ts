import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 4;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;
  faStar = faStar;
  constructor() { }

  ngOnChanges(): void {
   this.starWidth = this.rating * 85 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit('Clicked');
  }
}
