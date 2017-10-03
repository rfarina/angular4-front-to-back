import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Bring in FormsModule to be able to use NgModel
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';


@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
