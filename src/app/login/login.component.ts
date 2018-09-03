import { Component, OnInit } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router} from '@angular/router';
declare var $ :any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
pass;
user;

  constructor(private fb :FormBuilder, private router : Router) { this.createForm();}

  ngOnInit() {
  }

  createForm(){
    this.angForm = this.fb.group({
      user: ['', Validators.required],
      pass: ['', Validators.required,Validators.minLength(6),Validators.maxLength(20)]
    });
  }

submit(){
 this.user= this.angForm.controls['user'].value;
 this.pass= this.angForm.controls['pass'].value;
  if((this.user == 0)|| (this.pass==0))
    alert("field should not be empty");
  else{
    console.log("userid: "+this.user +"\n password: "+this.pass);
    alert("LOGIN SUCESS")
 this.router.navigate(['/dash']);
  }

}
}
