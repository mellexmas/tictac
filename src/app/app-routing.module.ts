import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ParameterComponent } from './parameter/parameter.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path: 'params', component: ParameterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
