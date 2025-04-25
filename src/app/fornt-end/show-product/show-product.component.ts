import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatCard, MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogActions } from '@angular/material/dialog';
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-show-product',
  standalone:true,
  imports: [MatCheckbox, MatCheckboxModule, MatCardModule, FormsModule, CommonModule, MatExpansionModule, ReactiveFormsModule,
     FormsModule,MatButton, RouterLink],
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  panelOpenState = false
  public orderForumGroup!: FormGroup;
  name = new FormControl('');

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.orderForumGroup = this.formBuilder.group({
      quantity: ['', Validators.required]
    });

    this.orderForumGroup.get('quantity')?.setValue(1);
  }

  onAddToBasket(id: number): void {
    alert('add to basket');
  }

  increaseQuantity(): void {
    const currentQuantity = this.orderForumGroup.get('quantity')?.value;
    this.orderForumGroup.get('quantity')?.setValue( parseInt(currentQuantity) + 1);
  }

  decreaseQuantity(): void {
    const currentQuantity = this.orderForumGroup.get('quantity')?.value;
    if (currentQuantity > 0) {
      this.orderForumGroup.get('quantity')?.setValue(currentQuantity - 1);
    }
  }
}
