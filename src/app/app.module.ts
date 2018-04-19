import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {
  ProwebAccordionItemComponent
} from './proweb-accordion-item/proweb-accordion-item.component';
import { ProwebAccordionComponent } from './proweb-accordion/proweb-accordion.component';


@NgModule({
  declarations: [
    AppComponent,
    ProwebAccordionItemComponent,
    ProwebAccordionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
