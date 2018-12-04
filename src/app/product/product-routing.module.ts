import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductdataComponent } from './productdata/productdata.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:ProductdataComponent
      },
      {
        path:'list',
        component:ProductlistComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
