import { Component, OnInit } from '@angular/core';
import { ApiEndpointsService } from '@app/core/service/api-endpoints.service';
import { ApiHttpService } from '@app/core/service/api-http.service';
import { AuthService } from '@app/core/service/auth.service';
import { EmployeeService } from '@app/shared/service/employeeservice';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
 
})
export class ContactComponent implements OnInit {
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
this.loading=true
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
