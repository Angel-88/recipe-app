import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
      },
      {
        path: 'favorite',
        loadChildren: () => import('./pages/favorite/favorite.module').then(m => m.FavoriteModule),
      },
      {
        path: 'fridge',
        loadChildren: () => import('./pages/fridge/fridge.module').then(m => m.FridgeModule),
      },
      {
        path: 'shopping-list',
        loadChildren: () => import('./pages/shopping-list/shopping-list.module').then(m => m.ShoppingListModule),
      },
    ],
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
