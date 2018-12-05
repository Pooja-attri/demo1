import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../../service/customer.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {
  customer;
  service;
  price;
  status;
  due;

  constructor(private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.customer = this.route.snapshot.params['id'];
    //console.log(this.customer);
    //console.log(this.route.snapshot.params['id']);
  }
  onAddSubmit() {
   
       

    let invoice = {
      customer: this.customer,
      service: this.service,
      price: this.price,
      status: this.status,
      due: this.due
    };

    this.customerService.saveInvoice(invoice).subscribe(invoice => {
      this.router.navigate(['/']);
    });
  }
}
