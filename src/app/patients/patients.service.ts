import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PatientsService {
    constructor(private http: Http) {
        console.log('Patients...')
    }

    getPatients() {
        return this.http.get('http://192.168.33.10/adt_api/public/api/v1/patients')
            .map(res => res.json());
    }
}