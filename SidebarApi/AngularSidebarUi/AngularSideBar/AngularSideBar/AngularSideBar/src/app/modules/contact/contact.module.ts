import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { contactRoutes } from './contact-routing.module';
import { ContactComponent } from './page/contact/contact.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [ContactComponent],
  imports: [contactRoutes, SharedModule,NgxDatatableModule]
})
export class ContactModule {}
