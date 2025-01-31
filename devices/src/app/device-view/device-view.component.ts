import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Device } from '../device.model';
import { DeviceService } from '../device.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.css']
})
export class DeviceViewComponent implements OnInit{

  device$:Observable<Device>=of();
  deviceId:any;

  constructor(private deviceService:DeviceService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.deviceId = this.route.snapshot.paramMap.get('id');
    this.device$ = this.deviceService.getDevice(this.deviceId);
  }

}
