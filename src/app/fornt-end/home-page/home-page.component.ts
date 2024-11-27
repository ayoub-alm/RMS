import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HeaderSectionComponent } from '../header-section/header-section.component';
import { CategoriesSectionComponent } from '../categories-section/categories-section.component';
import { PartneresComponent } from '../partneres/partneres.component';
import { KioskComponent } from '../kiosk/kiosk.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OrderService } from '../../services/OrderService';
import { ProductsServices } from '../../services/products.services';
import { ProductCategoryService } from '../../services/ProductCategoryService';
import { ContactUsComponent } from "../contact-us/contact-us.component";
import { BasketComponent } from '../basket/basket.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    FooterComponent,
    NavBarComponent,
    HeaderSectionComponent,
    CategoriesSectionComponent,
    PartneresComponent,
    KioskComponent,
    MatIconModule,BasketComponent,
    ContactUsComponent
],
  providers:[OrderService,ProductsServices,ProductCategoryService],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {}
