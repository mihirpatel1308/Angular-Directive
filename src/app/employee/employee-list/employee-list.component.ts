import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  public color: string;

  constructor() {
    this.color = '';
  }

  public changeColor(ColorName: string) {
    this.color = ColorName;
  }
}
