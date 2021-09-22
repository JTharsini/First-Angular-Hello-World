import { CoursesService } from './courses.service';
import { Component } from "@angular/core";
// used to get decorator to make a class
// as component

@Component({
    selector: 'courses', // <courses> => "courses" or <div class="courses"> => ".courses" or <div id="courses">  => "#courses"
    template: `<h2>{{"Title: " + getTitle()}}</h2>
               <ul>
                    <li *ngFor="let course of courses">
                        {{course}}
                    </li>
               </ul>`
})
export class CoursesComponent
{
    title = "List of courses";
    courses;

    constructor(service : CoursesService)
    {
        // let service = new CoursesService();
        // initializing here like this makes tight coupled dependency
        // change in contructor leads changes in multiple places.
        // instead we initialize let Angular to do that
        this.courses = service.getCourses();
    }

    getTitle()
    {
        return this.title;
    }
}