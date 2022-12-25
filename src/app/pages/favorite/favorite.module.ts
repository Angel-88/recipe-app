import { NgModule } from '@angular/core';

import { FavoriteComponent } from './favorite.component';
import { CommonModule } from '@angular/common';
import { FavoriteRoutingModule } from './favorite-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FavoriteRoutingModule,
  ],
  declarations: [ FavoriteComponent ],
  providers: [],
})
export class FavoriteModule {}

