import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppMaterialModule } from './modules/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppLogoComponent } from './components/app-logo/app-logo.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AppLogoComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
