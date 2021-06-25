import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  current;
  date;
  days:number=1000*60*60*24;
  month;
  count :number;
  amt;
  ext;
  int;
  count1;
  two2;
  newcount;
  st = false;
  st1 = false;
  int1: any;
  amt1: any;
  diff1: number;
  int2: number;
  amt2: any;
  newcount1: any;
  st2 = false;
  constructor() {}

  ngOnInit(): void {
    
  }
  
  changed(){
    console.log(this.st2);
    this.st2 = true;
    console.log("hi")
  }
  onSubmit(ref)
  {
    this.st = true;
    this.st1 = true;
    console.log(ref.value)
    this.date = moment(new Date(ref.value.date1));
    console.log((this.date));
    this.current = moment(new Date());
    console.log(this.current);
    console.log(`Difference is ${this.current.diff(this.date, 'days')} day(s)`);
    console.log(`Difference is ${this.current.diff(this.date, 'months')} month(s)`);
    this.newcount = this.current.diff(this.date, 'months');
    console.log(`${this.newcount} is the months diff`);
    this.count=(ref.value.amount);
    console.log(this.st1);
    //this.count=this.current - this.date;
    //console.log(this.count)
    // this.month = (Math.floor(((this.current)-(this.date))/(this.days)));
    // console.log(this.month)
    // this.count = Math.round(this.month / 30)
    // console.log(this.count)

    if(this.newcount<=12)
    {
      this.int = (ref.value.amount)*0.02*this.newcount;
      this.amt = (ref.value.amount)+this.int;
      console.log(this.amt);
    }
    else if(this.newcount>12)
    {
      this.int1 = (ref.value.amount)*0.02*this.newcount;
      this.amt1 = (ref.value.amount)+this.int1;
      console.log(this.amt1);

      this.newcount1 = this.newcount + 1;

      this.int2 = (ref.value.amount)*0.01*(this.newcount1);
      this.amt2 = (ref.value.amount)+this.int2;
      console.log(this.amt2);


     

      this.ext = this.newcount-12;
     
      console.log("newcount",this.ext);
      this.int = ((ref.value.amount)*0.025*this.ext)+((ref.value.amount)*0.02*12);
      this.amt = (ref.value.amount)+this.int;
      console.log( Math.ceil(this.amt));
      this.diff1 = this.amt - this.amt1;
    }

  }


}
