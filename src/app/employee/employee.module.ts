import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    // EmployeeListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class EmployeeModule { }
