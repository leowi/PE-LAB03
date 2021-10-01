import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from "@angular/router";

export class PATIENT {
  $key: string;
  name: string;
  lastName: string;
  birthday: string;
  height: number;
  address: string;
  longitude: string;
  latitude : string;
}

export class PATIENT_CONTROL {
  $key: string;
  id_patient: string;
  weight: string; 
  temperature: string;
  pressure:string;
  saturation_level: string
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private ngFirestore: AngularFirestore,
    private router: Router
  ) { }

  create(patient: PATIENT) {
    return this.ngFirestore.collection('patients').add(patient);
  }

  createControls(patient: PATIENT_CONTROL) {
    return this.ngFirestore.collection('patient_controls').add(patient);
  }

  getTasks() {
    return this.ngFirestore.collection('patients').snapshotChanges();
  }
  
  getControls(id) {
    return this.ngFirestore.collection('patient_controls',ref => ref.where('id_patient','==',id)).snapshotChanges();
  }

  getTask(id) {
    return this.ngFirestore.collection('patients').doc(id).valueChanges();
  }

  update(id, patient: PATIENT) {
    this.ngFirestore.collection('patients').doc(id).update(patient)
      .then(() => {
        this.router.navigate(['/todo-list']);
      }).catch(error => console.log(error));;
  }

  delete(id: string) {
    this.ngFirestore.doc('patients/' + id).delete();
  }
}
