import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-header-section',
  standalone: true,
  templateUrl: './header-section.component.html',
  imports: [
    MatButton
  ],
  styleUrls: ['./header-section.component.css']
})
export class HeaderSectionComponent {

}
