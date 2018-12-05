import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { ApplayoutComponent } from './layout/applayout/applayout.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';


@NgModule({
  declarations: [
    AppComponent,
    ApplayoutComponent,
    TopbarComponent,
    FooterComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpModule,HttpClientModule,BrowserAnimationsModule,ToastrModule.forRoot(), 
    PaginationModule.forRoot(),OrderModule,FilterPipeModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
