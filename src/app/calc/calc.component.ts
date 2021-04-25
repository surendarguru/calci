import { Component, OnInit } from '@angular/core';


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
  st = false;
  constructor() { }

  ngOnInit(): void {
  
  }
  onSubmit(ref)
  {
    this.st = true;
    console.log(ref.value)
    this.date = new Date(ref.value.date1);
    console.log((this.date));
    this.current = new Date();
    console.log(this.current);
    //this.count=this.current - this.date;
    //console.log(this.count)
    this.month = (Math.floor(((this.current)-(this.date))/(this.days)));
    console.log(this.month)
    this.count = Math.round(this.month / 30)
    console.log(this.count)

    if(this.count<=12)
    {
      this.int = (ref.value.amount)*0.02*this.count;
      this.amt = (ref.value.amount)+this.int;
      console.log(this.amt);
    }
    else if(this.count>12)
    {
      this.ext = this.count-12;
     
      console.log("count",this.ext);
      this.int = ((ref.value.amount)*0.025*this.ext)+((ref.value.amount)*0.02*12);
      this.amt = (ref.value.amount)+this.int;
      console.log( Math.ceil(this.amt));
    }

  }

}
