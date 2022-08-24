import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { EggSizeComponent } from './shared/components/egg-size/egg-size.component';
import { CookingTypeComponent } from './shared/components/cooking-type/cooking-type.component';
import { TemperatureBarComponent } from './shared/components/temperature-bar/temperature-bar.component';
import { TimerComponent } from './shared/components/timer/timer.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EggSizeComponent,
    CookingTypeComponent,
    TemperatureBarComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
