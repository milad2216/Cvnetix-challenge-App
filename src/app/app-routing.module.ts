import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './view/product-list/product-list.component';


const routes: Routes = [
  {
      path: '',
      redirectTo: 'product-list',
      pathMatch: 'full',
  },
  {
    path: 'product-list',
    component: ProductListComponent,
    data: {
      title: 'product list'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
