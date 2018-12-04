import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from'rxjs';			
import {map} from'rxjs/operators'; 
import {Contact} from './../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private dataUrl='http://localhost:3000/contact';
	constructor(private http:Http){}

	savedata(obj:Contact):Observable<Contact[]>{    //
		let header = new Headers({'Content-Type':'application/json'}); //header information

		let options = new RequestOptions ({headers:header});

		return this.http.post(this.dataUrl+'/save',{'data':obj},options).pipe(map((res:Response)=>res.json()));
  }
  
  getdata():Observable<Contact[]>{

		return this.http.get(this.dataUrl +'/getcontact').pipe(map((res:Response)=>res.json()));
		}

		deletedata(obj:string):Observable<Contact[]>{

			let header=new Headers({'Content-Type':'application/json'});
			let options = new RequestOptions({headers:header});
	
	
			return this.http.delete(this.dataUrl+'/delete/'+obj,options).pipe(
			map((res:Response)=>res.json()));
    }
	
}
