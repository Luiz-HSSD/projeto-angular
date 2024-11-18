import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { Router } from '@angular/router';
import { ProductReadComponent } from '../../compoments/product/product-read/product-read.component';
import { ProductRead2Component } from '../../compoments/product/product-read2/product-read2.component';
import { HeaderService } from '../../compoments/template/header/header.service';
@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [ MatButtonModule,
    ProductReadComponent,
    ProductRead2Component
  ],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent {

  constructor(private headerService: HeaderService ,private router: Router){
    this.headerService.headerData={
      title:"Cadastro de produtos",
      icon: "storefront",
      routeUrl:"/products"
    }
}

   navigateToProductCreate() : void {
    this.router.navigate(["/products/create"]);
  }

}
