import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { HelpComponent } from './help/help.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule
  ],
  declarations: [HelpComponent, AccountComponent]
})
export class CategoryModule { }
