import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { SettingsComponent } from '../app/settings/settings.component'
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [{
  path: "home",
  component: HomeComponent
},{
  path: "settings",
  component: SettingsComponent
},{
  path: "admin",
  component: AdminComponent
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
