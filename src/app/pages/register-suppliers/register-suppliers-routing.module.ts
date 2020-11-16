import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterSuppliersPage } from './register-suppliers.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterSuppliersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterSuppliersPageRoutingModule {}
