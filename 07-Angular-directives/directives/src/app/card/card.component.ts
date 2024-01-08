import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  products:string[] = []
  menuType:string = 'superUser'

  constructor() { 
    this.products = [
      'mouse',
      'keyboard',
      'monitor'
    ]
  }

  ngOnInit(): void {
  }

  add():void {
    this.products.push('cpu');
  }

  remove(idx:number):void {
    this.products.splice(idx,1)
  }

}
