export class Course {
        courseId: number;
      courseName: string;
      duration: string;
  constructor(
      courseId: number,
      courseName: string,
      duration: string
  ) { 

     this.courseId =  courseId;
      this.courseName =  courseName;
       this.duration =    duration;  
  }
}