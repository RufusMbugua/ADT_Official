import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {

  medicalRecordNumber : string;
  patientcccNumber : string;
  lastname : string;
  firstname : string;
  othername : string;
  
  constructor() { }

  ngOnInit() {
  }

  addPatient(){
    console.log(this.medicalRecordNumber);
    
  }
}
