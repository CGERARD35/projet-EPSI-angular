import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  { path: '', pathMatch:'full', loadChildren : () =>
      import('./landing-page/landing-page.module')
        .then((module_) => module_.LandingPageModule)
  },

  { path: 'connexion',  loadChildren : () =>
      import('./connection/connection.module')
        .then((module_) => module_.ConnectionModule)
  },
  { path: 'clients',  loadChildren : () =>
      import('./clients/clients.module')
        .then((module_) => module_.ClientsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    //Permet d'utiliser le lazy-loading sur l'ensemble de l'application
    { preloadingStrategy : PreloadAllModules }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
