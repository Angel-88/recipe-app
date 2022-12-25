import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { NgClass } from '@angular/common';

@NgModule({
  imports: [
    RouterLinkWithHref,
    NgClass,
    RouterLinkActive,
  ],
  exports: [
    HeaderComponent,
  ],
  declarations: [ HeaderComponent ],
  providers: [],
})
export class HeaderModule {}
