import { Component, OnInit } from '@angular/core';
import { Device } from '../device.model';
import { map, Observable, of } from 'rxjs';
import { DeviceService } from '../device.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent  implements OnInit{
  devices$:Observable<Device[]> =of([]);
  searchDevices$:Observable<Device[]>=of([]);

  searchText:string ='';
  sortBy:string ='';
  isAsc:boolean =true;

  constructor(private deviceService:DeviceService, private router:Router){}

  ngOnInit(): void {
    this.devices$ = this.deviceService.getDevices()
    this.searchDevices$ = this.devices$;
  }


  deleteDevice(id:any){
    this.deviceService.deleteDevice(id).subscribe(()=>
      this.ngOnInit());

  }

  editDevice(id:any){
    this.router.navigate([`/edit/${id}`])

  }


  search(){
    if(this.searchText){
      this.searchDevices$ = this.devices$.pipe(map((devices)=>{
        return devices.filter((device:Device)=>{
          return device.name.toLowerCase().includes(this.searchText.toLowerCase())||
          device.category.toLowerCase().includes(this.searchText.toLowerCase())
        })
      }));
    }else{
      this.searchDevices$ = this.devices$;
    }
  }

  onSort(){
    if(this.sortBy){
      this.searchDevices$ = this.devices$.pipe(map((devices)=>{
      return devices.sort((a:any,b:any)=>{
        if(a[this.sortBy]<(b[this.sortBy])){
          return this.isAsc? -1:1;
        }else{
          return this.isAsc? 1:1;
        }
      })
      }))
    }
  }

  onToggel(){
    this.isAsc =!this.isAsc;
    this.onSort();
  }


}

