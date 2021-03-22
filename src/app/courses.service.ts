import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface myData{
    obj: Object
}

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    constructor(private http: HttpClient) {

    }

    getCourses() {
        return this.http.get('https://reqbin.com/echo/get/json');
    }
}
