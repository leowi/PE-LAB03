import { Component, OnInit } from '@angular/core';

import { CrudService } from './../services/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-add-control-patient',
  templateUrl: './add-control-patient.page.html',
  styleUrls: ['./add-control-patient.page.scss'],
})
export class AddControlPatientPage implements OnInit {

  controlForm: FormGroup;
  id: any;

  constructor(
    private crudService: CrudService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,    
    private router: Router
  ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.controlForm = this.formBuilder.group({
      id_patient: this.id,
      weight: [''],
      temperature: [''],
      pressure: [''],
      saturation_level: ['']
    })
  }

  onSubmit() {
    if (!this.controlForm.valid) {
      return false;
    } else {
      this.crudService.createControls(this.controlForm.value)
      .then(() => {
        this.controlForm.reset();
        this.router.navigate(['view-patient/'+this.id]);
      }).catch((err) => {
        console.log(err)
      });
    }
  }

}
