import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { States, cartReducers, cartEffects } from '+store/index';
import { SharedModule } from '#shared/shared.module';
import { CartComponent } from '-cart/containers/cart/cart.component';
import { CartApparelComponent } from '-cart/components/cart-apparel/cart-apparel.component';
import { cartRouting } from '-cart/cart.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(States.Cart, cartReducers),
    EffectsModule.forFeature(cartEffects),
    cartRouting
  ],
  declarations: [CartComponent, CartApparelComponent]
})
export class CartModule {}