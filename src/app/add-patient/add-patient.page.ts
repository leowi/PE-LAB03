import { Component, OnInit } from '@angular/core';

import { CrudService } from './../services/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.page.html',
  styleUrls: ['./add-patient.page.scss'],
})
export class AddPatientPage implements OnInit {

  patientForm: FormGroup;

  constructor(
    private crudService: CrudService,
    public formBuilder: FormBuilder,    
    private router: Router
  ) { }

  ngOnInit() {
    this.patientForm = this.formBuilder.group({
      name: [''],
      lastName: [''],
      birthday: [''],
      height: [''],
      address: [''],
      longitude: [''],
      latitude : [''],
    })
  }

  onSubmit() {
    if (!this.patientForm.valid) {
      return false;
    } else {
      this.crudService.create(this.patientForm.value)
      .then(() => {
        this.patientForm.reset();
        this.router.navigate(['/']);
      }).catch((err) => {
        console.log(err)
      });
    }
  }

}
