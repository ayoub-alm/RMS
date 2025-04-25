import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import { OrderService } from './services/OrderService';
import { LocalStorageService } from './services/local-storage.service';
import { BasketComponent } from './fornt-end/basket/basket.component';
import AOS from "aos";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule, BasketComponent ],
  providers:[OrderService,LocalStorageService,HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'HMS';
  constructor(private router: Router) {}
  ngOnInit() {
    // Initialize AOS for animations
    // AOS.init({
    //   duration: 1400, // Animation duration (optional)
    //   easing: 'fade', // Animation easing (optional)
    //   once: true, // Run animation only once (optional)
    //   mirror: false, // Trigger animation when scrolling back (optional)
    //   // offset: 200, // Set the trigger offset (optional)
    // });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        AOS.refresh();
      }
    });
  }
}
