import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Device } from './device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private apiUrl="https://ominous-tribble-vw5g4j9prg9cxr5j-3000.app.github.dev/devices";

  constructor(private http:HttpClient) { }

  getDevices():Observable<Device[]>{
    return this.http.get<Device[]>(this.apiUrl);
  }

  getDevice(id:number):Observable<Device>{
    return this.http.get<Device>(this.apiUrl+"/"+id);
  }

  addDevice(device:Device):Observable<Device>{
    return this.http.post<Device>(this.apiUrl,device);
  }

  updateDevice(id:number,device:Device):Observable<Device>{
    return this.http.put<Device>(this.apiUrl+"/"+id,device);
  }

  deleteDevice(id:number):Observable<void>{
    return this.http.delete<void>(this.apiUrl+"/"+id);
  }


}
