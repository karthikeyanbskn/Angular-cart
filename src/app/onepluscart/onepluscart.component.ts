import { Component, OnInit, Injectable , NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-onepluscart',
  templateUrl: './onepluscart.component.html',
  styleUrls: ['./onepluscart.component.css']
})
export class OnepluscartComponent implements OnInit {

  getData : string;
  m: number = 56000;
  //value: number= angular.element(document.getElementById('#q').val();
  // t: number = this.m*this.value;
  // q:string;
  a: number = (this.m*0.05);
  b: number = 100;
  c: number = this.m +this.a+this.b;
  key: string = 'Item 1';
  //sessionStorage.setItem(key: 'm')
  
  constructor(private http:Http) {
  
   }
  
  userObj: object ={};
  
  addNewUser = function (user){
    console.log(user.q);
    console.log(user.count);
    this.userObj = {
      "id": 55,
  "amount": this.m,
  "q":user.q
  
    }
    this.http.post("http://localhost:3000/user2/",this.userObj).subscribe((res: Response) => {
      this.isAdded = true;
      console.log(this.isAdded);
    }
     )
  }
  onChange(){
  
  }
  ngOnInit() {
  //  return this.http.get('http://localhost:3000/user').map(res => res.json()).subscribe(
  //    data => this.getData=JSON.stringify(data.amount),error => alert(error),
  //    ()=>console.log("finished"))
  
  // this.q=this.getData= JSON.stringify(data.amount);
  //var uniqueIDArr = _.pluck(this.getData.amount, 'id'); 
  
  
  }
  
  
  
}
