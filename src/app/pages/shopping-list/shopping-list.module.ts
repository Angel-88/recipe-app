import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';



@NgModule({
  imports: [
    CommonModule,
    ShoppingListRoutingModule,
  ],
  declarations: [ ShoppingListComponent ],
  providers: [],
})
export class ShoppingListModule {}
