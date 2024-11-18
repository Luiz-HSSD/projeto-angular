import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent {

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
  deleteProduct() :void{
    this.productService.delete(this.product).subscribe(() => {
      this.productService.showMessage("Operação realizada com sucesso!");
      this.router.navigate(["/products"]);
    });
  }

}
