import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { PtoductCreateComponent } from './compoments/product/ptoduct-create/ptoduct-create.component';
import { ProductUpdateComponent } from './compoments/product/product-update/product-update.component';
import { ProductDeleteComponent } from './compoments/product/product-delete/product-delete.component';
export const routes: Routes = [
    { 
        path:"",
        component:HomeComponent
    },
    { 
        path:"products",
        component:ProductCrudComponent
    },
    { 
        path:"products/create",
        component:PtoductCreateComponent
    },
    { 
        path:"products/update/:id",
        component:ProductUpdateComponent
    },
    { 
        path:"products/delete/:id",
        component:ProductDeleteComponent
    }
];
