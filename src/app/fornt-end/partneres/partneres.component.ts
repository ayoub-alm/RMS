import { Component, OnInit } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-partneres',
  standalone:true,
  imports:[MatIcon, MatIconModule],
  templateUrl: './partneres.component.html',
  styleUrls: ['./partneres.component.css']
})
export class PartneresComponent implements OnInit{
  ngOnInit(): void {
    // AOS.init();
  }


}
