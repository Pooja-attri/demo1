import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerdataComponent } from './customerdata/customerdata.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  {
    path:'',
    children:[{
      path:'',
      component:CustomerdataComponent
    },
    {
     path:'list',
     component:CustomerListComponent
    }
  ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
