import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppDataService {
    base_Url = ''
    constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
        this.base_Url = baseUrl;
    }
    headers = new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8'
    });
    getCurrentTime() {
        return this.http.get('https://afternoon-temple-16530.herokuapp.com/currenttime');
    }
    SendDataToDB(data: any) {
        return this.http.post(this.base_Url + 'api/data', JSON.stringify(data), { headers: this.headers });
    }
}
