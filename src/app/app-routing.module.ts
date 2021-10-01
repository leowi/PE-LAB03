import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'list-patient',
    pathMatch: 'full'
  },
  {
    path: 'add-patient',
    loadChildren: () => import('./add-patient/add-patient.module').then( m => m.AddPatientPageModule)
  },
  {
    path: 'list-patient',
    loadChildren: () => import('./list-patient/list-patient.module').then( m => m.ListPatientPageModule)
  },
  {
    path: 'view-patient/:id',
    loadChildren: () => import('./view-patient/view-patient.module').then( m => m.ViewPatientPageModule)
  },
  {
    path: 'add-control-patient/:id',
    loadChildren: () => import('./add-control-patient/add-control-patient.module').then( m => m.AddControlPatientPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
