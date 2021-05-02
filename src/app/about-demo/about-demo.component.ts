import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-about-demo',
  templateUrl: './about-demo.component.html',
  styleUrls: ['./about-demo.component.scss']
})
export class AboutDemoComponent implements OnInit {
  result: number;
  constructor() { }

  ngOnInit(): void {
  }

  onCalculate(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const num1 = +form.value.number1;
    const num2 = +form.value.number2;
    const operator = form.value.operator;
    console.log(num1);
    console.log(num2);
    console.log(operator);
    switch (operator) {
      case "+": {
        this.result = num1 + num2;
        console.log(this.result);
      }
      case "-": {
        this.result = num1 - num2;
        console.log(this.result);
        break;
      }
      case "*": {
        this.result = num1 * num2;
        console.log(this.result);
        break;
      }
      case "/": {
        this.result = num1 / num2;
        console.log(this.result);
        break;
      }
      case "%": {
        this.result = num1 % num2;
        console.log(this.result);
        break;
      }
    }

    console.log(this.result);

  }

}
