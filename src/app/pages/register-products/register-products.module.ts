import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterProductsPageRoutingModule } from './register-products-routing.module';

import { RegisterProductsPage } from './register-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterProductsPageRoutingModule
  ],
  declarations: [RegisterProductsPage]
})
export class RegisterProductsPageModule {}
