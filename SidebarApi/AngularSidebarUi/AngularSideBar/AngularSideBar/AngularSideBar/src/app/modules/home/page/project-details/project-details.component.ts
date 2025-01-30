import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '@data/schema/project';
import { EmployeeService } from '@app/shared/service/employeeservice';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html'
})
export class ProjectDetailsComponent implements OnInit {
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

