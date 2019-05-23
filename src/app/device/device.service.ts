import {
  Http,
  Response,
  RequestOptions,
  Headers
} from '@angular/http';
import { Observable, observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Device } from './device';
import { map } from 'rxjs/operators';

@Injectable()
export class DeviceService {
  constructor(private _httpService: Http) {}

  token: string;

  getAuthToken(user: string, password: string, domain: string): void {
    const url = 'https://192.168.100.100:8443/sdn/v2.0/auth';
    const body = { login: { user: user, password: password, domain: domain } };
    this._httpService.post(url, body).subscribe((res: Response) => {
      localStorage.setItem('token', res.json().record.token);
    });
  }

  getAllDevices(): Observable<Device[]> {

    this.token = localStorage.getItem('token'),
    console.log(this.token);
    const headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token
    });
    const options = new RequestOptions({ headers: headers });

    return this._httpService
      .get('https://192.168.100.100:8443/sdn/v2.0/net/links', options)
      .pipe(map((responce: Response) => responce.json()));
  }
}
