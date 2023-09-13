import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'users-list',
    children:[
      {
        path:"",
        loadChildren: () => import('./users-list/users-list.module').then( m => m.UsersListPageModule)
      },{
        path:":userId",
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      }
    ]
  },
  {
    path: 'places-list',
    children:[
      {
        path:"",
        loadChildren: () => import('./places-list/places-list.module').then( m => m.PlacesListPageModule)
      },
      {
        path:":packageId",
        loadChildren: () => import('./profile-package/profile-package.module').then( m => m.ProfilePackagePageModule)
      }
    ]
  },
  {
    path: 'place-form',
    loadChildren: () => import('./place-form/place-form.module').then( m => m.PlaceFormPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'profile-package',
    loadChildren: () => import('./profile-package/profile-package.module').then( m => m.ProfilePackagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
