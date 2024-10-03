import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Child3Component } from '../child3/child3.component';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.scss']
})
export class Parent3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('childComp') childComponent!: Child3Component;

  callChildGreet() {
    console.log(this.childComponent.greet());
  }

}
