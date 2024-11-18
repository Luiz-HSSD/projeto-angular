import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from "@angular/common/http"
import { create } from 'domain';
import { catchError, EMPTY, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl="http://localhost:3001/products";

  constructor(private snackbar: MatSnackBar,private http: HttpClient ) { }

  showMessage(msg: string,isError:Boolean = false) : void{
    this.snackbar.open(msg,"X",{
      horizontalPosition:'right',
      verticalPosition:"top",
      duration:5000,
      panelClass: isError?["msg-error"]: ['msg-success'] 

    })

  }

  errorHandler(eror: any) : Observable<any>{
    this.showMessage("Ocorreu um erro!",true)
    return EMPTY;

  }

  createProiduct(product: Product) : Observable<Product> {
    return this.http.post<Product>(this.baseUrl,product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }
  
  readById(id : string): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(product : Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(product : Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }
}
