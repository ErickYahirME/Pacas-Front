import { Component, Input } from '@angular/core';
import { productGET } from 'src/app/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() card: productGET[] = [];
}
