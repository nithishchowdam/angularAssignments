import { Component, Input } from '@angular/core';
import { Product } from '../product/models';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() productObj:Product

}
