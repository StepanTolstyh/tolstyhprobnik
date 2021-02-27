import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './shared/components/main/main.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ItemsComponent } from './items/items.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemEditComponent } from './items/item-edit/item-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ItemsComponent,
    ItemListComponent,
    ItemEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
