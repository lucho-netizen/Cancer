import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../../services/patient/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css'
})
export class AdminPatientsComponent implements OnInit {

  patients: any[] = [];

  constructor(
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((data) => {
      this.patients = data;
    },
  (error)=> {
    console.error('Error fetching patients:', error);
  });
  }

}
