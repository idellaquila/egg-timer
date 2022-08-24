import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-egg-size',
  templateUrl: './egg-size.component.html',
  styleUrls: ['./egg-size.component.css']
})
export class EggSizeComponent implements OnInit {
  @Input('weight') weight! : string
  @Input('size') size! : string
  @Input('background') background! : string
  @Input('color') color! : string
  constructor() { }
  
  ngOnInit(): void {
  }

}
