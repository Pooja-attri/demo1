import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductRoutingModule } from './product-routing.module';
import { ProductdataComponent } from './productdata/productdata.component';
import { ProductlistComponent } from './productlist/productlist.component';
import {ContactService} from '../service/contact.service';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    CarouselModule.forRoot(),SlickCarouselModule
  ],
  declarations: [ProductdataComponent, ProductlistComponent],
  providers: [ContactService]
})
export class ProductModule { }
