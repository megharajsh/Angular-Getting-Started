import { NgModule } from '@angular/core';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {ConvertToSpacesPipe} from "../shared/convert-to-spaces.pipe";
import {RouterModule} from "@angular/router";
import {ProductDetailGuard} from "./product-details/product-detail.guard";
import { SharedModule } from '../shared/shared.module';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [
      ProductListComponent,
      ProductDetailsComponent,
      ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailsComponent
      }
    ]),
    SharedModule,
    FontAwesomeModule
  ]
})
export class ProductModule { }
