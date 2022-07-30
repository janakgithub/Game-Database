import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GamesComponent } from './components/games/games.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchPipe } from './common/search.pipe';
import { GamedetailComponent } from './components/gamedetail/gamedetail.component'
import {GaugeModule} from 'angular-gauge';
import { TabsComponent } from './components/tabs/tabs.component';
import { LoginComponent } from './components/login/login.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamesComponent,
    SearchPipe,
    GamedetailComponent,
    TabsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GaugeModule.forRoot(),
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
