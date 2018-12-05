import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from'rxjs';	
import {map} from'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: Http) { }


  saveInvoice(invoice) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/api/invoices', invoice, {headers: headers})
    .pipe(map((res:Response)=>res.json()));
  }

  saveCustomer(customer) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/api/customers', customer, {headers: headers})
    .pipe(map((res:Response)=>res.json()));
}

  
getCustomers() {
  return this.http.get('http://localhost:3000/api/customers')
  .pipe(map((res:Response)=>res.json()));
}

deleteCustomer(id) {
  return this.http.delete('http://localhost:3000/api/customers/' + id)
  .pipe(map((res:Response)=>res.json()));
}

getCustomer(id) {
  return this.http.get('http://localhost:3000/api/customers/' + id)
  .pipe(map((res:Response)=>res.json()));
}
getInvoices(customer_id) {
  return this.http.get('http://localhost:3000/api/invoices/customer/' + customer_id)
  .pipe(map((res:Response)=>res.json()));
}
markPaid(id, invoice) {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  return this.http.put('http://localhost:3000/api/invoices/' + id, invoice, {headers: headers})
  .pipe(map((res:Response)=>res.json()));
}
deleteInvoice(id) {
  return this.http.delete('http://localhost:3000/api/invoices/' + id)
  .pipe(map((res:Response)=>res.json()));
}

}
