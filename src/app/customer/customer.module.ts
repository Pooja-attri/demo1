import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { CustomerRoutingModule } from './customer-routing.module';

import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,FormsModule,ReactiveFormsModule
  ],
  declarations: [ AddCustomerComponent, CustomersComponent, CustomerDetailsComponent]
})
export class CustomerModule { }
