import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IgvGenomebrowserComponentComponent } from './igv-genomebrowser-component/igv-genomebrowser.component';

@NgModule({
  declarations: [
    AppComponent,
    IgvGenomebrowserComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
