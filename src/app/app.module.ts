import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DeviceService } from './device/device.service';
import { HttpModule } from '@angular/http';


import { AppRoutingModule , routingComponent  } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { SwitchComponent } from './switch/switch.component';
import { PortComponent } from './port/port.component';
import { StatistiksComponent } from './statistiks/statistiks.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    routingComponent,
    SwitchComponent,
    PortComponent,
    StatistiksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
