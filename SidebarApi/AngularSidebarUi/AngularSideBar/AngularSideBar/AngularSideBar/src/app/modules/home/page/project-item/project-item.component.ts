import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '@app/shared/service/employeeservice';

import { Project } from '@data/schema/project';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  data: any[]=[];
  rows: any[]=[];
  columns: any[]=[];
reorderable=true;

  constructor(
   private employeetservice: EmployeeService,

  ){}

  ngOnInit(): void {
this.fetchEmployeeData();
}





fetchEmployeeData(): void {
  // eslint-disable-next-line no-debugger
  debugger;
  this.employeetservice.getEmployeeData().subscribe({
    next: (responseData: any[]) => {
      this.data = responseData;
      this.columns = Object.keys(this.data[0]).map((key) => ({ prop: key, name: key.toUpperCase() }));
      this.rows = this.data.map((employee) => {
        const row = {};
        Object.keys(employee).forEach((key) => {
          row[key] = employee[key];
        });
        return row;
      });
    },
    error: (error) => {
      console.error('Error fetching employee data:', error);
    }
  });
}
}

