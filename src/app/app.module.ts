import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminModule }  from './admin/admin.module';

//Router
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { NavComponent } from './shared/navbar.component';


//Maps
import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    NavComponent,
    MenuComponent,
    SearchComponent,
    HomeComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminModule,
    AgmCoreModule.forRoot(),
    ReactiveFormsModule,
    routes,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCM4aNTzIdRr35r8aNTikBV_BPjl-C3EMA',
      libraries: ["places"]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
