import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  eggsData = [{
    size: 'S',
    weight: '~42g', 
    baseCookingTime: 58000
  },
  {
    size: 'M',
    weight: '~49g',
    baseCookingTime: 60000
  },
  {
    size: 'L',
    weight: '~56g',
    baseCookingTime: 64000
  },{
    size: 'XL',
    weight: '~63g',
    baseCookingTime: 70000
  }]


  eggSize = [
    {
      cookingType: 'Soft',
      time: 0.8
    },
    {
      cookingType: 'Medium',
      time: 1.0
    },
    {
      cookingType: 'Hard',
      time: 1.2
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
