import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  rangeValue: any = 50;
  selectedTemperature!: any;
  selectedSize!: any;
  selectedCookingType!: any;
  //   cookingTime!: any;
  obtainedCookingTime!: any;
  cookingTimer!: any;
  timer!: any;

  eggsData = [
    {
      size: 'S',
      weight: '~42g',
      baseCookingTime: 580000,
    },
    {
      size: 'M',
      weight: '~49g',
      baseCookingTime: 600000,
    },
    {
      size: 'L',
      weight: '~56g',
      baseCookingTime: 640000,
    },
    {
      size: 'XL',
      weight: '~63g',
      baseCookingTime: 700000,
    },
  ];

  eggSize = [
    {
      cookingType: 'Soft',
      time: 0.8,
    },
    {
      cookingType: 'Medium',
      time: 1.0,
    },
    {
      cookingType: 'Hard',
      time: 1.2,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  getSize(e: any) {
    console.log(e);
    this.selectedSize = e;
  }

  getCookingType(e: any) {
    console.log(e);
    this.selectedCookingType = e;
  }

  temperatureChange(e: any) {
    /**
     * coefficiente fisso da dividere per temperatura = tempo di cottura
     * coefficiente fisso è 100
     * quindi 100/temperatura e il risultato è moltiplicato per il tempo di cottura ottenuto in precedenza
     *  */

    this.selectedTemperature = e.target.value;

    let coefficient = 100;
    let cookingTime = coefficient / this.selectedTemperature;
    this.obtainedCookingTime =
      cookingTime * this.selectedCookingType * this.selectedSize;

    console.log(this.obtainedCookingTime);

    setInterval(this.countdown, 1);
  }

  countdown() {
    this.cookingTimer = this.obtainedCookingTime - 1;
    console.log(this.cookingTimer);
  }
}
