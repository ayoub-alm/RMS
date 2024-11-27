import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductCategory } from '../../models/ProductCategory';
import { ProductCategoryService } from '../../services/ProductCategoryService';
import { ProductsServices } from '../../services/products.services';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatCard, MatCardActions, MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { OrderModel } from '../../models/order.model';
import { OrderService } from '../../services/OrderService';
import { MatButtonModule } from '@angular/material/button';
import {MatChipAvatar} from "@angular/material/chips";


@Component({
  selector: 'app-kiosk',
  standalone:true,
    imports: [MatIconModule, MatCard, MatCardActions, CommonModule, MatCardModule, MatButtonModule, MatChipAvatar],
  providers:[OrderService,ProductCategoryService,ProductsServices],
  templateUrl: './kiosk.component.html',
  styleUrls: ['./kiosk.component.css']
})
export class KioskComponent implements OnInit, OnDestroy {
addToBasket(_t20: ProductModel) {
throw new Error('Method not implemented.');
}
showProductDialog(arg0: string) {
throw new Error('Method not implemented.');
}

subscriptions: Subscription[] = [];
categories: BehaviorSubject<ProductCategory[]> = new BehaviorSubject<ProductCategory[]>([])
allProduct: BehaviorSubject<ProductModel[]> = new BehaviorSubject<ProductModel[]>([])
constructor(private categoryService: ProductCategoryService, private productService: ProductsServices ){}
ngOnInit(): void {

  this.subscriptions.push(
    this.categoryService.getProductsCategories().subscribe(productCategories => {
    this.categories.next(productCategories);
  }))


  this.subscriptions.push(
    this.productService.getProducts().pipe().subscribe(
      products => this.allProduct.next(products)
    ));
  
}

getProductsByCategory(arg0: string) {
  throw new Error('Method not implemented.');
  }

ngOnDestroy(): void {
  // Destroy all subscriptions
  this.subscriptions.forEach(subscription => subscription.unsubscribe() );
}
}
