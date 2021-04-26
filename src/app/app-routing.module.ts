import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcComponent } from './calc/calc.component';

const routes: Routes = [
  {path:"calc",component:CalcComponent},
  {path:"",redirectTo:"calc",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
