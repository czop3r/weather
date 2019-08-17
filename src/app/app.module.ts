import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherDialogComponent } from './weather-dialog/weather-dialog.component';



import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatSelectModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [WeatherDialogComponent]
})
export class AppModule { }
