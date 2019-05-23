import { Identifiers } from "@angular/compiler";

export class Device{

    private uid:String;
    private deviceStatus:String;
    private uris:String[];

    constructor(){}

    getUid(){
        return this.uid;
    }

    setUid(uid:String)
    {
        this.uid=uid;
    }

    getDeviceStatus(){
        return this.deviceStatus;
    }

    setDeviceStatus(deviceStatus:String)
    {
        this.deviceStatus=deviceStatus;
    }

    getUris(){
        return this.uris;
    }

    setUris(uris:String[])
    {
        this.uris=uris;
    }

}