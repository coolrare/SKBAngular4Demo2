import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { fallbackRoute } from "./shared/fallback-route";
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { FlotComponent } from './charts/flot/flot.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

const routes: Routes = [
  { path: '', redirectTo: '/form1', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'form1', component: Form1Component },
  { path: 'form2', component: Form2Component },
  {
    path: 'charts', children: [
      { path: '', redirectTo: 'flot', pathMatch: 'full' },
      { path: 'flot', component: FlotComponent }
    ]
  },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
