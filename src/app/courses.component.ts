
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
    <h2>{{ "Title: " + getTitle() }}</h2>
    <div> "JSON: <br>" {{ fileJson }}</div>
    `
})
export class CoursesComponent {
    title = "List of courses";

    getTitle() {
        return this.title;
    }

    courses = {};

    fileJson: any;

    constructor(private service: CoursesService) {
        service.getCourses().subscribe((data) => {
            this.courses = Object.assign(data);
            this.fileJson = JSON.stringify(this.courses, null, 2);
        });
    }

    // Logic for calling an HTTP service
}