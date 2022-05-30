import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MenuComponent} from "./shared/menu/menu.component";

const routes: Routes = [

  { path: '', pathMatch:'full', loadChildren : () =>
      import('./landing-page/landing-page.module')
        .then((module_) => module_.LandingPageModule)
  },

  { path: 'connexion',  loadChildren : () =>
      import('./connection/connection.module')
        .then((module_) => module_.ConnectionModule)
  },
  {
  path: 'home',
  component: MenuComponent,
  children: [
    { path: 'clients',  loadChildren : () =>
        import('./clients/clients.module')
          .then((module_) => module_.ClientsModule)
    },
    {
      path: 'orders', loadChildren: () =>
        import('./orders/orders.module')
          .then((module_) => module_.OrdersModule)

    },
    { path: 'statistics',  loadChildren : () =>
        import('./statistics/statistics.module')
          .then((module_) => module_.StatisticsModule)
    },
    { path: 'products',  loadChildren : () =>
        import('./products/products.module')
          .then((module_) => module_.ProductsModule)
    },
    { path: 'admin',  loadChildren : () =>
        import('./admin/admin.module')
          .then((module_) => module_.AdminModule)
    },
  ]},
  {path:'**', loadChildren:
      () => import('./page-not-found/page-not-found.module')
        .then((module_) => module_.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    //Permet d'utiliser le lazy-loading sur l'ensemble de l'application
    // { preloadingStrategy : PreloadAllModules }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

