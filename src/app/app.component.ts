import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Course } from './models/Course.model';
import { CourseComponent } from "./Components/course/course.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule,RouterOutlet, CourseComponent]
})
export class AppComponent {
  courses: Course[] = [
    {title: 'Angular complete course', isActive: false},
    {title: 'Angular Unit testing', isActive: false},
    {title: 'Angular Rxjs', isActive: false},
  ]
  title = 'angular-animations';
}
