import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Course } from '../../models/Course.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class CourseComponent {
     @Input() course!: Course;
}
