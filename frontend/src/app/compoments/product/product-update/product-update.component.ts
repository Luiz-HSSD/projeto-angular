import { Component, OnInit } from '@angular/core';

import { MatButtonModule } from '@angular/material/button'
import { ProductService } from '../product.service'; 
import { ActivatedRoute, Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import  {MatFormFieldModule} from  '@angular/material/form-field';
import  {MatInputModule} from  '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Product } from '../product.model';
@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    

  ],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit {
  public product: Product={
    name:"",
    price: undefined
  }
  constructor(private productService:ProductService, private router: Router, private route: ActivatedRoute){

  }
  ngOnInit(): void {
    const id= this.route.snapshot.params["id"];
    this.productService.readById(id).subscribe(
      product =>  this.product=product
    ); 
  }
  navigateToProducts() :void{
    this.router.navigate(["/products"]);
  }
  updateProduct() :void{
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Operação realizada com sucesso!");
      this.router.navigate(["/products"]);
    });
  }
}
