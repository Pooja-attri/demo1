import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';

import {Contact} from '../../model/contact';
import {ContactService} from '../../service/contact.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  objcontact:Contact;
  contactarr:any=[];
  ContactForm:FormGroup ;
  dropdownSettings = {};
  //deptarray:any;
  
  constructor(private builder:FormBuilder, private dataservice:ContactService,
    private toastrService: ToastrService) {
    
 
   } 
   deptarray=[{"id":1,"name":"HR"},{"id":2,"name":"IT"},{"id":3,"name":"Accounts"},{"id":4,"name":"Training"}]

  ngOnInit() {
    
    this.ContactForm= this.builder.group({

      name : new FormControl(null,Validators.required),
      email : new FormControl(null,Validators.required),
      subject: new FormControl(null,Validators.required),
      message : new FormControl(null,Validators.required),
      gender : new FormControl(null),
      category: new FormControl(null),
      Dob:new FormControl(null),
      dept:new FormControl(null),
      dept1:new FormControl(null),
      _id:new FormControl(null)
    });
    //this.deptarray=[{"id":1,"name":"HR"},]
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    
  }
  contactsave(){
      console.log(this.ContactForm.value);

    this.dataservice.savedata(this.ContactForm.value).subscribe(data=>{
       console.log(data);
      console.log('saved');
      this.toastrService.success('Hello world!', 'Toastr fun!');

    });
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  showSuccess() {
    this.toastrService.success('Hello world!', 'Toastr fun!');
  }

  

}
