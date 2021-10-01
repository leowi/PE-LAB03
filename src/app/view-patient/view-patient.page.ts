import { Component, OnInit } from '@angular/core';

import { CrudService, PATIENT, PATIENT_CONTROL } from './../services/crud.service';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.page.html',
  styleUrls: ['./view-patient.page.scss'],
})
export class ViewPatientPage implements OnInit {

  editForm: FormGroup;
  id: any;
  patients: PATIENT[];
  patients_control: PATIENT_CONTROL[];

  constructor(
    private crudService: CrudService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.getTask(this.id).subscribe((data) => {
      this.editForm = this.formBuilder.group({
        name: [data['name']],
        lastName: [data['lastName']]
      })
      console.log(this.id);
    });
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      name: [''],
      lastName: ['']
    })
    
    this.crudService.getControls(this.id).subscribe((res) => {

      console.log("hay resp : "+res)
      this.patients_control = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as PATIENT_CONTROL
        };
      })
    });
    
  }

  onSubmit() {
    this.crudService.update(this.id, this.editForm.value)
  }

}
