import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss']
})
export class Parent1Component {

  childData: any;

  receiveData(data: any) {
    this.childData = data; // Assign the received data to childData
  }

}
