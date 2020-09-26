import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JogodavelhaModule } from './jogodavelha/jogodavelha.module';
import { JogodavelhaService } from './jogodavelha/shared/jogodavelha.service';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,   
    JogodavelhaModule   
  ],
  providers: [
    JogodavelhaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
