import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent implements OnInit {

  style:string = 'disable'

  backColor:string = 'black'
  fontColor:string = 'white'

  item:string = ""
  list:string[] = []

  isEnableBlock:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  changeStyle(){
    if(this.style === 'enable'){
      this.style = 'disable'
    } else {
      this.style = 'enable'
    }
  }

  addItem(){
    this.list.push(this.item);
  }

}
