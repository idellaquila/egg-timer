import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

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
  obtainedCookingTime!: any;
  cookingTimer!: any;
  timer!: any;
  showTime: boolean = false;
  countdown:any;


  eggsData = [
    {
      size: 'S',
      weight: '~42g',
      baseCookingTime: 580000,
      checked: false,
    },
    {
      size: 'M',
      weight: '~49g',
      baseCookingTime: 600000,
      checked: false,
    },
    {
      size: 'L',
      weight: '~56g',
      baseCookingTime: 640000,
      checked: false,
    },
    {
      size: 'XL',
      weight: '~63g',
      baseCookingTime: 700000,
      checked: false,
    },
  ];

  eggSize = [
    {
      cookingType: 'Soft',
      time: 0.8,
      background: '#f2542d',
      checked: false,
    },
    {
      cookingType: 'Medium',
      time: 1.0,
      background: '#fac05e',
      checked: false,
    },
    {
      cookingType: 'Hard',
      time: 1.2,
      background: '#f7c59f',
      checked: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  getSize(e: any, i: any) {
    this.eggsData.forEach((e) => {
      e.checked = false;
    });

    console.log(e);
    this.eggsData[i].checked = true;
    this.selectedSize = e;
  }

  getCookingType(e: any, i: number) {
    this.eggSize.forEach((e) => {
      e.checked = false;
    });

    console.log(e);
    this.selectedCookingType = e;
    this.eggSize[i].checked = true;
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
  }

  startTimer() {
    this.showTime = true;
    // let timerInterval = setInterval(() => {
    //   this.cookingTimer = Math.trunc(this.obtainedCookingTime--);
    //   let tempTime = moment.duration(this.cookingTimer, 'seconds');
    //   this.minutes = tempTime.minutes();
    //   this.seconds = tempTime.seconds();
    // }, 1000);
    //     const eventTime = 1366549200;
    // const currentTime = 1366547400;
    // const diffTime = eventTime - currentTime;

    let duration: any = moment.duration(
      this.obtainedCookingTime,
      'milliseconds'
    );

    setInterval(() => {
      duration = moment.duration(duration - 1000, 'milliseconds');
      this.countdown = duration.minutes() + ':' + duration.seconds();
    }, 1000);
  }
}
