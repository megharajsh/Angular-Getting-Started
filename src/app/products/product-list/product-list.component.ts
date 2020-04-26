import {Component, OnDestroy, OnInit} from '@angular/core';
import { IProduct } from "../product";
import {ProductService} from "../product.service";
import {catchError, tap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  private _listFilter;
  errorMessage: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;

  }
  filteredProducts: IProduct[];
  products: IProduct[];
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  private performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  notifyHandler(data: string): void {
    console.log(data);
  }


}
