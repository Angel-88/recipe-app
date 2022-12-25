import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { FridgeComponent } from './fridge.component';

const routes: Routes = [
  {
    path: '',
    component: FridgeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FridgeRoutingModule {}
