import { Component, OnInit } from '@angular/core';
import { PatientsService} from '../patients.service';
import {Patient} from '../patients';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
  providers: [PatientsService]
})
export class PatientListComponent implements OnInit {

  mode = 'Observable';
  patients : Patient[];
  constructor(private patientsService:PatientsService) { 
      // this.patientsService.getPatients()
      //     .subscribe(patients => { 
      //         this.patients = patients; 
      //      });
  }
  getPatients(){
    // this.patientsService.getPatients().subscribe(patients => { console.log(patients) 
    // });
  }
  ngOnInit() {
    // this.getPatients();
  }
}
