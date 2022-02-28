import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChickenComponent } from './chicken/chicken.component';
import { MuttonComponent } from './mutton/mutton.component';
import { FishComponent } from './fish/fish.component';
import { EggsComponent } from './eggs/eggs.component';
import { CombosComponent } from './combos/combos.component';
import { LoginComponent } from './login/login.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule }   from '@angular/forms';
import { ChartComponent } from './chart/chart.component';
import { SignupComponent } from './signup/signup.component';
import { Combos1Component } from './combos/combos1/combos1.component';
import { Combos2Component } from './combos/combos2/combos2.component';
import { Combos3Component } from './combos/combos3/combos3.component';

@NgModule({
  declarations: [
    AppComponent,
    ChickenComponent,
    MuttonComponent,
    FishComponent,
    EggsComponent,
    CombosComponent,
    LoginComponent,
    BestsellerComponent,
    CategoryComponent,
    FooterComponent,
    HomeComponent,
    ChartComponent,
    SignupComponent,
    Combos1Component,
    Combos2Component,
    Combos3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
