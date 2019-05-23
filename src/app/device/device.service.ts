import {Http,Response,RequestOptions,Headers,HttpHeaders} from '@angular/http';
import {HttpHeaders} from '@angular/common/http';
import { Observable, observable } from "rxjs";
import { Injectable } from '@angular/core';
import {Device} from './device';
import { map } from 'rxjs/operators';

@Injectable()
export class DeviceService{

    constructor(private _httpService : Http){}

    token:any;

    getAllDevices() :Observable<Device[]>{

        

        
        
        // var url = "https://192.168.100.100:8443/sdn/v2.0/auth";
        //     let body = {"login":{"user":"sdn","password":"skyline","domain":"sdn"}};
        //         this._httpService.post(url,body)
        //         .subscribe((res:Response) => {
                  
        //             this.token = res.json().record.token;
                    
                    
                    

        //         });
        this.token = "a60e1c3930e347caa3e2e9c292270ead;"
                console.log(this.token);
                let headers = new Headers({'Content-Type':'application/json',
                Authorization: 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});

                  return this._httpService.get("https://192.168.100.100:8443/sdn/v2.0/net/links",{
                    headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token)
                  })
        .pipe(map((
            responce :Response)=>responce.json()
            
            ));


                
                   
    }

}