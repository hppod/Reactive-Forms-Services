import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

//IMPORTANDO ReactiveFormsModule
import {ReactiveFormsModule} from '@angular/forms';
import { SignupFormService } from './signup-form/signup-form.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [SignupFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
