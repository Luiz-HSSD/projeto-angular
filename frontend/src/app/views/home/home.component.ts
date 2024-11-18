import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HeaderService } from '../../compoments/template/header/header.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  constructor(private headerService: HeaderService){
      this.headerService.headerData={
        title:"Ínicio",
        icon: "home",
        routeUrl:"/"
      }
  }
}
