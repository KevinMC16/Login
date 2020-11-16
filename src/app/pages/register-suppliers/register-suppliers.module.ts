import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterSuppliersPageRoutingModule } from './register-suppliers-routing.module';

import { RegisterSuppliersPage } from './register-suppliers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterSuppliersPageRoutingModule
  ],
  declarations: [RegisterSuppliersPage]
})
export class RegisterSuppliersPageModule {}
