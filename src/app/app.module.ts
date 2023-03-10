import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { ContactComponent } from './components/contact/contact.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {CdkMenuModule} from '@angular/cdk/menu';
import {MatDialogModule} from '@angular/material/dialog';
//required for Dialog
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { ViewChartComponent } from './components/view-chart/view-chart.component';
import { MenComponent } from './components/men/men.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ContactComponent,
    ViewProductComponent,
    ViewChartComponent,
    MenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    CdkMenuModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatBadgeModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
