import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cooking-type',
  templateUrl: './cooking-type.component.html',
  styleUrls: ['./cooking-type.component.css']
})
export class CookingTypeComponent implements OnInit {
  @Input('background')background!:string
  @Input('cookingType') cookingType!:string
  
  constructor() { }

  ngOnInit(): void {
  }

}
