import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // for directives 
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TemplateRoutingModule } from './template-routing.module';
import { ContactComponent } from './contact/contact.component';
import { ContactqueryComponent } from './contactquery/contactquery.component';
import { RegisterComponent } from './register/register.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'; // for multiselect dropdown

import {NgxPaginationModule} from 'ngx-pagination'; //https://www.npmjs.com/package/ngx-pagination
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
@NgModule({
  imports: [
    CommonModule,
    TemplateRoutingModule,FormsModule,ReactiveFormsModule,BsDatepickerModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),NgxPaginationModule,OrderModule,FilterPipeModule
  ],
  declarations: [ContactComponent, ContactqueryComponent, RegisterComponent]
})
export class TemplateModule { }
