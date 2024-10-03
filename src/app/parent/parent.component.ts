import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  courses: any = [];
  ngOnInit(): void {
    this.courses = [
      {
        cardTitle: "Software Engineering 123",
        title: "Introduction to SE",
        description: "A foundational course covering the principles of software engineering, including software design, development, and testing methodologies.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Software_engineering_code.jpg/1200px-Software_engineering_code.jpg",
        lastUpdated: "2024-09-15"
      },
      {
        cardTitle: "Web Development",
        title: "Web Development with Angular",
        description: "Learn to build dynamic, responsive web applications using Angular, one of the most popular frontend frameworks.",
        imageUrl: "https://angular.io/assets/images/logos/angular/angular.svg",
        lastUpdated: "2024-08-30"
      },
      {
        cardTitle: "Cloud Computing",
        title: "Cloud Computing Essentials",
        description: "An introductory course to cloud computing, covering cloud infrastructure, services, and platforms like AWS and Azure.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Cloud_computing.svg/1920px-Cloud_computing.svg.png",
        lastUpdated: "2024-07-25"
      },
      {
        cardTitle: "Data Science",
        title: "Data Science and Machine Learning",
        description: "Explore the fundamentals of data science and machine learning, including data analysis, visualization, and predictive modeling.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Data_Science_Venn_Diagram.png/1920px-Data_Science_Venn_Diagram.png",
        lastUpdated: "2024-06-18"
      },
      {
        cardTitle: "Cybersecurity",
        title: "Cybersecurity Fundamentals",
        description: "Understand the basics of cybersecurity, including network security, encryption, and threat detection.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Cybersecurity_Month_-_October_2018.jpg/1280px-Cybersecurity_Month_-_October_2018.jpg",
        lastUpdated: "2024-09-01"
      },
      {
        cardTitle: "Data Engineering",
        title: "DE Fundamentals",
        description: "Understand the basics of DE, including network security, encryption, and threat detection.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Cybersecurity_Month_-_October_2018.jpg/1280px-Cybersecurity_Month_-_October_2018.jpg",
        lastUpdated: "2024-09-01"
      }
    ]

  }
}
