import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // <-- Import HttpClientModule


import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { HttpService } from './http.service'; // <-- need to manually import generated services


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
    HttpClientModule // <-- Include module in our AppModules
  ],
  providers: [HttpService], // <-- Include HttpService (whatever other services we have) in providers array
  bootstrap: [AppComponent]
})
export class AppModule { }
