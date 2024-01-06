import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() name: string = '';
  
  constructor() {
    console.log(`Constructor ${this.name}`)
   }

  ngOnInit(): void {
    this.name = this.name + 'x'
    console.log(`OnInit ${this.name}`)
  }

  ngOnChanges(): void { //only called by inputs
    console.log(`OnChanges ${this.name}`);
  }

}
