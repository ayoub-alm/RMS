import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import path from 'path';
import { PatientAllComponent } from './patient-all/patient-all.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'', component: IndexComponent, children:[
    {path:'patient', component:PatientAllComponent},
    {path:'products', component:ProductsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
