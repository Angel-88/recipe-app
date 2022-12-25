import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FridgeComponent } from './fridge.component';
import { FridgeRoutingModule } from './fridge-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FridgeRoutingModule,
  ],
  declarations: [ FridgeComponent ],
  providers: [],
})
export class FridgeModule {}
