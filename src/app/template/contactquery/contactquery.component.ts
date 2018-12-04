import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/contact';
import {ContactService} from '../../service/contact.service';
@Component({
  selector: 'app-contactquery',
  templateUrl: './contactquery.component.html',
  styleUrls: ['./contactquery.component.css']
})
export class ContactqueryComponent implements OnInit {

    contactarr:any=[];
  constructor(private dataservice:ContactService) { }

  ngOnInit() {
    this.getdata();
  }
getdata(){

  this.dataservice.getdata().subscribe(data=>{

    this.contactarr=data;
  });
}
deletedata(id){
  {
      
    this.dataservice.deletedata(id).subscribe(data=>{
    this.getdata();
            console.log('saved');
    
          });
          }
}
userFilter: any = { name: '' };
key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
}
