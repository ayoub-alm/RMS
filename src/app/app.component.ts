import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderService } from './services/OrderService';
import { LocalStorageService } from './services/local-storage.service';
import { BasketComponent } from './fornt-end/basket/basket.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule, BasketComponent ],
  providers:[OrderService,LocalStorageService,HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS';
}
