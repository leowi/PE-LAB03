import { Component, OnInit } from '@angular/core';
import { CrudService, PATIENT } from './../services/crud.service';


@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.page.html',
  styleUrls: ['./list-patient.page.scss'],
})
export class ListPatientPage implements OnInit {

  patients: PATIENT[];

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.getTasks().subscribe((res) => {

      console.log("hay resp : "+res)
      this.patients = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as PATIENT
        };
      })
    });
  }

  todoList() {
    this.crudService.getTasks()
    .subscribe((data) => {
      console.log(data)
    })
  }

  remove(id) {
    console.log(id)
    if (window.confirm('Are you sure?')) {
      this.crudService.delete(id)
    }
  }  

}
