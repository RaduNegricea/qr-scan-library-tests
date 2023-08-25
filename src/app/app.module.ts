import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';

import { AppComponent } from './app.component';
import { SafePipe } from './safe.pipe';

LOAD_WASM().subscribe((res: any) => console.log('LOAD_WASM', res))

@NgModule({
  imports:      [ 
    FormsModule,
    BrowserModule, 
    NgxScannerQrcodeModule 
  ],
  declarations: [ AppComponent, SafePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
