import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceComponent } from './device/device.component'
import { SwitchComponent } from './switch/switch.component';

const routes: Routes = [
  {path : 'device' , component : DeviceComponent} ,
  {path : 'switch' , component : SwitchComponent},
  {path : '' , component : SwitchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DeviceComponent];
