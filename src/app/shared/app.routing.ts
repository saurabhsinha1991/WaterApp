import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'home', component: AppComponent },
            { path: '' , component: AppComponent}
        ])    
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        AppComponent
    ]
})
export class AppRoutingModule {}

