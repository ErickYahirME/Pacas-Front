import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { VendedorComponent } from './crud/vendedor/vendedor.component';
import { AdminComponent } from './crud/admin/admin.component';
import { AdminGuard } from './guards/admin.guard';
import { vendedorGuard } from './guards/vendedor.guard';
import { authGuard } from './guards/auth.guard';


const routes: Routes = [


    {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'compras',
    loadChildren: () => import('./compras/compras.module').then(m => m.ComprasModule),
    canActivate: [authGuard]
  },
  {
    path: 'shared',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule),
    canActivate: [authGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule),
    canActivate: [authGuard]
  },
  {
    path: 'administrador-ventas',
    component: VendedorComponent,
    loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule),
    canActivate: [vendedorGuard, authGuard], // Proteger la ruta con el guard
  },
  {
    path: 'admin-crud',
    component:AdminComponent,
    loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule),
    canActivate: [AdminGuard, authGuard]
  },
  // {
  //   path: 'card',
  //   component: CardComponent
  // },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AdminGuard, vendedorGuard, authGuard]
})
export class AppRoutingModule { }
