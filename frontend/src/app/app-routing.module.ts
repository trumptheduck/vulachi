import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LookupComponent } from './lookup/lookup.component';
import { UniversityComponent } from './university/university.component';
import { PrinterComponent } from './utils/printer/printer.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { WishesComponent } from './wishes/wishes.component';

const routes: Routes = [
  {
    path: "home",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "lookup",
        component: LookupComponent
      },
      {
        path: "university",
        component: UniversityComponent
      },
      {
        path: "viewCourse",
        component: ViewcourseComponent
      },
      {
        path: "profilePrinter",
        component: PrinterComponent,
      },
      {
        path: "wishes",
        component: WishesComponent,
      },
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
    canActivate: [AuthGuard],
    loadChildren: () => import('./management/management.module').then((m) => m.ManagementModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
