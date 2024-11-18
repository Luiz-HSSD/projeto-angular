import { Product } from './../product.model';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { ProductService } from '../product.service'; 
import { Router } from '@angular/router';
//material
import { MatCardModule } from '@angular/material/card';
import  {MatFormFieldModule} from  '@angular/material/form-field';
import  {MatInputModule} from  '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ptoduct-create',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule
  ],
  templateUrl: './ptoduct-create.component.html',
  styleUrl: './ptoduct-create.component.css'
})
export class PtoductCreateComponent {
  public product: Product={
    name:"",
    price: undefined
  }
  constructor(private productService:ProductService, private router: Router){

  }
  navigateToProducts() :void{
    this.router.navigate(["/products"]);
  }
  createProduct() :void{
    this.productService.createProiduct(this.product).subscribe(() => {
      this.productService.showMessage("Operação realizada com sucesso!");
      this.router.navigate(["/products"]);
    })
    
  }
}
