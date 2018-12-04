import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderdataComponent } from './orderdata/orderdata.component';
import { OrderlistComponent } from './orderlist/orderlist.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:OrderdataComponent
      },
      {
        path:'list',
        component:OrderlistComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
