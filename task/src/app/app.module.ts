import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import {UsernameComponent} from "./username/username.component";
import {SuccessAlertComponent} from "./success-alert/success-alert.component";
import {WarningAlertComponent} from "./warning-alert/warning-alert.component";

@NgModule({
  declarations: [
    AppComponent,
    DisplayDetailsComponent,
    UsernameComponent,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
