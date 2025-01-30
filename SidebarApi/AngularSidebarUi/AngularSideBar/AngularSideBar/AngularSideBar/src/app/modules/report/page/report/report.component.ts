import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '@app/shared/service/employeeservice';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  data: any[]=[];
  rows: any[]=[];
  columns: any[]=[];
reorderable=true;
loading:boolean=false;
  constructor(
   private employeetservice: EmployeeService,

  ){}

  ngOnInit(): void {
this.fetchEmployeeData();
}





fetchEmployeeData(): void {
  // eslint-disable-next-line n
  this.loading=true
  debugger;
  this.employeetservice.getEmployeeData().subscribe({
    next: (responseData: any[]) => {
      this.data = responseData;
      this.columns = Object.keys(this.data[0]).map((key) => ({ prop: key, name: key.toUpperCase() }));
      this.rows = this.data.map((employee) => {
        const row = {};
        Object.keys(employee).forEach((key) => {
          row[key] = employee[key];
          this.loading=false
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

