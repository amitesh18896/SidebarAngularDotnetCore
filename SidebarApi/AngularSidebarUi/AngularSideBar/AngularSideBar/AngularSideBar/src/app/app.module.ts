import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';

import { AuthModule } from '@modules/auth/auth.module';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { ApiEndpointsService } from './core/service/api-endpoints.service';

import { TokenInterceptor } from './core/interceptor/token.interceptor';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Constants } from './core/constants/constants';





@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    NavComponent,
    FooterComponent,
    AuthLayoutComponent,

  ],
  imports: [
    // angular
    BrowserModule,
    HttpClientModule,
    // 3rd party
    AuthModule,
    // core & shared
    CoreModule,
    SharedModule,
    NgxDatatableModule,

    // app
    AppRoutingModule,

    BrowserAnimationsModule
  ],
  providers: [
    ApiEndpointsService,
    Constants
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}