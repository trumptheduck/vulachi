import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: "home",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      }
    ]
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "login",
    component: AuthComponent,
  },
  {
    path: "admin",
    // canActivate: [AuthGuard],
    loadChildren: () => import('./management/management.module').then((m) => m.ManagementModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
