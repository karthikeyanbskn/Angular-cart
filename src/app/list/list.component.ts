import { Http,Response,Headers} from '@angular/http';
import { Component, OnInit, Injectable , NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import 'rxjs/add/operator/map';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private http:Http) { }
  id:number=0;
  w:number= 5600;
  m: number=0;
  id1:number=0;
  w1:number= 2900;
  m1: number=0;
  id2:number=0;
  w2:number= 5600;
  m2: number=0;

  private headers = new Headers({'Content-Type':'application/json'});
  
  users = [];
  fetchData = function(){
  	this.http.get("http://localhost:3000/user/33").subscribe(
     (res: Response) => {
       this.user = res.json();
       console.log(this.user.q);
       this.id = this.user.q;
       this.m= this.id * this.w;
     })
      
    // this.id=this.user.q;
   
  }
  fetchData1 = function(){
  	this.http.get("http://localhost:3000/user1/44").subscribe(
     (res: Response) => {
       this.user = res.json();
       console.log(this.user.q);
       this.id1 = this.user.q;
       this.m1= this.id1 * this.w1;
     })
      
    // this.id=this.user.q;
   
  }

  fetchData2 = function(){
  	this.http.get("http://localhost:3000/user2/55").subscribe(
     (res: Response) => {
       this.user = res.json();
       console.log(this.user.q);
       this.id2 = this.user.q;
       this.m2= this.id2 * this.w2;
     })
      
    // this.id=this.user.q;
   
  }
  ngOnInit() {
    this.fetchData();
    this.fetchData1();
    this.fetchData2();

  }

}
