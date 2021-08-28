import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { MatIconModule } from '@angular/material/icon';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UtilsComponent } from './utils/utils.component';
import { PrinterComponent } from './utils/printer/printer.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { LookupComponent } from './lookup/lookup.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { UniversityComponent } from './university/university.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { WishesComponent } from './wishes/wishes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    DashboardComponent,
    UtilsComponent,
    PrinterComponent,
    LookupComponent,
    UniversityComponent,
    ViewcourseComponent,
    WishesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SwiperModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
    CKEditorModule,
    NgxSliderModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
