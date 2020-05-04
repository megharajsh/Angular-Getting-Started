import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from "./star/star.component";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [
      StarComponent
  ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
  exports: [
      StarComponent,
      CommonModule,
      FormsModule
  ]
})
export class SharedModule { }
