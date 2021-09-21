import { Component } from "@angular/core";
// used to get decorator to make a class
// as component

@Component({
    selector: 'courses', // <courses> => "courses" or <div class="courses"> => ".courses" or <div id="courses">  => "#courses"
    template: '<h2>Courses</h2>'
})
export class CoursesComponent
{

}