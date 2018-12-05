import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';

@NgModule({
  imports: [
    CommonModule,
    InvoiceRoutingModule,FormsModule,ReactiveFormsModule
  ],
  declarations: [AddInvoiceComponent]
})
export class InvoiceModule { }
