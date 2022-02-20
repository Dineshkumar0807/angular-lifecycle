import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit, OnDestroy, OnChanges {
  @Input() name: string;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(change) {
    console.log('Changes initialize', change);
  }

  ngOnInit() {
    console.log('onInit initialized');
  }

  ngOnDestroy() {
    console.log('onDestroy initialized');
  }
}
