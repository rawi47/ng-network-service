import { Component, OnInit } from '@angular/core';
import {Device} from './device'
import { DeviceService } from './device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  devices : Device[];
  constructor(private _deviceService : DeviceService) { }


  getDevices(): void {

    this._deviceService.getAllDevices()
        .subscribe((deviceData) =>  {this.devices = deviceData , console.log(deviceData)} ,
         (error) => { console.log(error);
        })

      }

  ngOnInit() {

    this.getDevices();
  }

}
