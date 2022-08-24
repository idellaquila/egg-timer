import { Component, EventEmitter, Input, OnInit, Output, ɵɵsetComponentScope } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-temperature-bar',
  templateUrl: './temperature-bar.component.html',
  styleUrls: ['./temperature-bar.component.css']
})
export class TemperatureBarComponent implements OnInit {
  // value:any = 51

   control = new FormControl('prova');
  constructor() { }

  ngOnInit(): void {
  
    }
  }





