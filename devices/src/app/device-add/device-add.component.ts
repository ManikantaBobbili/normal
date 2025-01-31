import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-add',
  templateUrl: './device-add.component.html',
  styleUrls: ['./device-add.component.css']
})
export class DeviceAddComponent implements OnInit {

  deviceForm!:FormGroup;

  constructor(private deviceService:DeviceService, private fb:FormBuilder, private router:Router){}
  ngOnInit(): void {
    this.deviceForm = this.fb.group({
      name:['',[Validators.required]],
      category:['',[Validators.required]],
      date:['',[Validators.required]]
    })
  }


  addDevice(){
    if(this.deviceForm.valid){
      this.deviceService.addDevice(this.deviceForm.value).subscribe(()=>
      this.router.navigate(['/']))
    }
  }

  



}
