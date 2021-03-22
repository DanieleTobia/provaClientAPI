import { HttpClient, HttpHeaders } from '@angular/common/http';
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

    headers = new HttpHeaders()
        .append('content-type', 'application/json')
        .append('Access-Control-Allow-Origin', '*');


    getCourses() {
        return this.http.get('https://reqbin.com/echo/get/json',{ 'headers': this.headers });
    }
}
