import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { MainComponent } from './main/main.component';
import { SchoolsComponent } from './schools/schools.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    MainComponent,
    SchoolsComponent,
    DashboardComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ManagementModule { }
