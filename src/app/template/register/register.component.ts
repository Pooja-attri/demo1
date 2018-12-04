import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {Register} from '../../model/register';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

      objregister:Register;
      registerarr:any=[];

      RegisterForm:FormGroup = this.builder.group({

          name:new FormControl(null,Validators.required),
          email:new FormControl(null,Validators.required),
          phone_no:new FormControl(null,Validators.required),
          password:new FormControl(null,Validators.required),
          confirm:new FormControl(null,Validators.required)
      });

  constructor(private builder:FormBuilder) { 

    this.objregister = new Register();
  }

  ngOnInit() {
  }

}
