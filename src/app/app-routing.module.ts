import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
// import { AppComponent } from './app.component';
import { ChickenComponent } from './chicken/chicken.component';
import { CombosComponent } from './combos/combos.component';
import { Combos1Component } from './combos/combos1/combos1.component';
import { Combos2Component } from './combos/combos2/combos2.component';
import { Combos3Component } from './combos/combos3/combos3.component';
import { EggsComponent } from './eggs/eggs.component';
import { FishComponent } from './fish/fish.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MuttonComponent } from './mutton/mutton.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'chicken',component:ChickenComponent},
  {path:'mutton',component:MuttonComponent},
  {path:'fish',component:FishComponent},
  {path:'eggs',component:EggsComponent},
  {path:'combos',component:CombosComponent,children :[{path:'combos1',component:Combos1Component},{path:'combos2',component:Combos2Component},{path:'combos3',component:Combos3Component}]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'chart',component:ChartComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
  ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
