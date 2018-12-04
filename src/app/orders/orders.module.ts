import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderdataComponent } from './orderdata/orderdata.component';
import { OrderlistComponent } from './orderlist/orderlist.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  declarations: [OrderdataComponent, OrderlistComponent]
})
export class OrdersModule { }
