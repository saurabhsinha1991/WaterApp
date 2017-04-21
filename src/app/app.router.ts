import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';

export const router: Routes = [
	{ path:'', redirectTo: 'home', pathMatch: 'full'},
	{ path:'home', component: HomeComponent},
	{ path:'search-result', component: SearchResultComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);



