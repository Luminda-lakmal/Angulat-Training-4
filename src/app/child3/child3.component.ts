import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  greet() {
    return 'Hello from the child component!';
  }
}
