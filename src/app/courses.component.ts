
import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `<h2>{{"Json: "+ fileJson }}</h2>`

})
export class CoursesComponent {

    headers = new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*');

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
