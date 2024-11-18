import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import {  CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [ CommonModule,
    MatTableModule,
    RouterModule,
  ],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})
export class ProductReadComponent implements OnInit  {
  products: Product[]=[];
  displayedColumns = ['id', 'name','price','action'];
  constructor(private prdoctService: ProductService){

  }

  ngOnInit(): void {
    this.prdoctService.read().subscribe( products => {
      this.products=products;
      console.log(this.products);
    });
  }

}
