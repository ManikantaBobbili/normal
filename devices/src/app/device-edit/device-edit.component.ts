import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviceService } from '../device.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.css']
})
export class DeviceEditComponent implements OnInit {

  deviceId:any;
  deviceForm!:FormGroup;


  constructor(private deviceService:DeviceService,
              private fb:FormBuilder,
              private route:ActivatedRoute,
              private router:Router){}

  ngOnInit(): void {
    this.deviceForm = this.fb.group({
      name:['',[Validators.required]],
      category:['',[Validators.required]],
      date:['',[Validators.required]]
    })

    this.deviceId = this.route.snapshot.paramMap.get('id');
    this.deviceService.getDevice(this.deviceId).subscribe((res)=>
    this.deviceForm.patchValue(res))
  }

  updateDevice(){
    this.deviceService.updateDevice(this.deviceId,this.deviceForm.value).subscribe(()=>
    this.router.navigate(['/']));
  }

}
