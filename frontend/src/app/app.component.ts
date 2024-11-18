import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './compoments/template/header/header.component';
import { FooterComponent } from './compoments/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { NavComponent } from './compoments/template/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    FooterComponent
  ],
  templateUrl:"./app.component.html",
  
  styles: [],
})
export class AppComponent {
  title = 'frontend';
}
