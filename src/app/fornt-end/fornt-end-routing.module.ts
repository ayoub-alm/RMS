import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesSectionComponent } from './categories-section/categories-section.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { HomePageComponent } from './home-page/home-page.component';
import { KioskComponent } from './kiosk/kiosk.component';
import {IndexComponent} from "./index/index.component";

const routes: Routes = [
  {      path: '', component: IndexComponent,
        children: [
          { path: '', component: HomePageComponent },
          { path: 'categories', component: CategoriesSectionComponent },
          { path: 'product/show/:ref', component: ShowProductComponent },
          { path: 'kiosk', component: KioskComponent },
        ]},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontEndRoutingModule { }
