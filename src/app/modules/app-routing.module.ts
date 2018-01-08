import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';
import { MainComponent } from '@learnApp-components/main/main.component';
import { AppLogoComponent } from '@learnApp-components/app-logo/app-logo.component';

const routes: Routes = [
  { path: '', component: AppLogoComponent },
  { path: 'main', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
