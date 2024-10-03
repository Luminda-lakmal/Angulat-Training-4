import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.scss']
})
export class Parent2Component implements AfterViewInit {

  @ViewChild(Child2Component) child!: Child2Component; 
  childData: any;

  ngAfterViewInit() {
    
  }

  getChildData() {
    this.childData = this.child.sendCourses(); 
  }

}
