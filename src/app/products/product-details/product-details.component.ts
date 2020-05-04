import { Component, OnInit } from '@angular/core';
import { IProduct } from "../product";
import {ActivatedRoute, Router} from "@angular/router";
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct;
  faChevronLeft = faChevronLeft;
  constructor(private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      "productId": id,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
