import {Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import { OrderService } from '../../services/OrderService';
import { ProductInOrderDto } from '../../Dtos/product-in-order.dto';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductModel } from '../../models/product.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIcon, MatToolbar, MatToolbar, MatToolbarModule],
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],

})
export class BasketComponent implements OnInit, OnDestroy {
  @Input()
  public products: BehaviorSubject<ProductInOrderDto[]> = new BehaviorSubject<ProductInOrderDto[]>([]); // Local products array
  public totalAmount: string = '0'; // Local total amount
  private orderSubscription!: Subscription;
  @Output() closeDrawer = new EventEmitter<any>();

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.order$.subscribe((data)=>{
      this.products.next(data.products)
       this.totalAmount = this.calculateTotalAmount(data.products).toString()
    })
  }

  // Calculate the total amount for the order
  private calculateTotalAmount(products: ProductInOrderDto[]): number {
    return products.reduce((acc, product) => {
      const price = parseFloat(product.product.price?.toString() || '0');
      return acc + price * product.quantity;
    }, 0);
  }

  removeFromBasket(product: ProductInOrderDto): void {
    console.log('Removing product:', product);
  
    // Get the current order
    const currentOrder = this.orderService.orderSubject.getValue();
  
    // Filter out the product by its ID or unique property
    currentOrder.products = currentOrder.products.filter(prd => prd.product.ref !== product.product.ref);
  
    // Recalculate the total amount after removal
    currentOrder.totalAmount = this.calculateTotalAmount(currentOrder.products);
  
    // Update the order in the BehaviorSubject
    this.orderService.updateOrder(currentOrder);
  }


  increaseQuantity(product: ProductInOrderDto) {
    product.quantity++;
    // this.reCalculateTotalAmount();
  }
  
  decreaseQuantity(product: ProductInOrderDto) {
    if (product.quantity > 1) {
      product.quantity--;
      // this.reCalculateTotalAmount();
    }
  }
  
  generateWhatsAppMessage() {
    let message = `🛒 *Order Details:*\n\n`;
    this.products.getValue().forEach(product => {
      message += `📌 ${product.product.name}\n`;
      message += `  ➡️ Quantity: ${product.quantity}\n`;
      message += `  💰 Price: ${product.product.price} MAD each\n\n`;
    });
    message += `🧾 *Total Amount*: ${this.totalAmount} MAD\n`;
    message += `\n🚀 *Please confirm your order!*`;

    // Encode the message for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;

    // Open WhatsApp with the generated message
    window.open(whatsappUrl, '_blank');
  }


  onCloseBasket() {
    this.closeDrawer.emit();
  }


  // Clean up the subscription when the component is destroyed

  ngOnDestroy(): void {
    if (this.orderSubscription) {
      this.orderSubscription.unsubscribe();
    }
  }

}
