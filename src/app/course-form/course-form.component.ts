import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from './course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit  {
  courseForm: FormGroup;


  course = new Course(1, 'Angular', '5 days');
  submitted = false;
  onSubmit() { this.submitted = true; }


 constructor(private formBuilder: FormBuilder){}

 ngOnInit(){
   this.courseForm = this.formBuilder.group({
     courseId: ['', Validators.required],
     courseName: ['', Validators.required],
     duration: ['', Validators.required]
   })
 }



}