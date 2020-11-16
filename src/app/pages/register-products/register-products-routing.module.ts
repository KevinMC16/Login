import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterProductsPage } from './register-products.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterProductsPageRoutingModule {}
