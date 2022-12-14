import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from ".././components/dashboard/dashboard.component";
import { HomeComponent } from ".././components/home/home.component";

const routes : Routes =[
    { path: '', component: HomeComponent},
    { path: 'dashboard', component: DashboardComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
