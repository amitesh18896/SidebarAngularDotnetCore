import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './page/report/report.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [ReportComponent],
  imports: [ReportRoutingModule, SharedModule,NgxDatatableModule]
})
export class ReportModule {}
