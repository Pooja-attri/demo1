import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

const routes: Routes = [
  {
    path:'',
    children:[
      
      {
      path:'add-customer',
      component:AddCustomerComponent
    },

    {
      path:'customer-details/:id',
      component:CustomerDetailsComponent
    },

    {
      path:'customers',
      component:CustomersComponent
    },
   
  ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
