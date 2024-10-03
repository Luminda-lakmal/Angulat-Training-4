import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  constructor(private dataService: DataService) { }
  courses: any = [];
  ngOnInit(): void {
    this.dataService.courseData().subscribe((data) => {
      this.courses = data;
    });
  }

}
