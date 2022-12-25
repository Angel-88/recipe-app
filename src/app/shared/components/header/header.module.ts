import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    RouterLinkWithHref,
    NgClass,
    RouterLinkActive,
    MatIconModule,
  ],
  exports: [
    HeaderComponent,
  ],
  declarations: [ HeaderComponent ],
  providers: [],
})
export class HeaderModule {}
