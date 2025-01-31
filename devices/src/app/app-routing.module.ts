import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceViewComponent } from './device-view/device-view.component';
import { DeviceAddComponent } from './device-add/device-add.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';

const routes: Routes = [
  {path:'',component:DeviceListComponent},
  {path:'view/:id',component:DeviceViewComponent},
  {path:'add',component:DeviceAddComponent},
  {path:'edit/:id',component:DeviceEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
