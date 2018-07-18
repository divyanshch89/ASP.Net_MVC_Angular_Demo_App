import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChangeDateComponent } from './changedate/changedate.component';

@NgModule({
    imports: [BrowserModule, HttpClientModule],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl }
    ],
    declarations: [AppComponent, ChangeDateComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
    return (<HTMLInputElement>document.getElementById('base_path')).value;
}

