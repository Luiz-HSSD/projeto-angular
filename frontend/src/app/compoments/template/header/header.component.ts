import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
 constructor(private headerService: HeaderService){

 
}
  ngOnInit(): void {
  }

  get title(): string {
    return this.headerService.headerData.title;
  }
  get icon(): string {
    return this.headerService.headerData.icon;
  }
  get routeUrl(): string {
    return this.headerService.headerData.routeUrl;
  }
}
