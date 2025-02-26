import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ThemeService } from '@core/service/theme.service';
import { environment } from '@env';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
loading: any;
isCollapsed: boolean=false;
toggleSidebar() {
  this.isCollapsed = !this.isCollapsed;
}
  public version = environment.version;
  public repoUrl = 'https://github.com/mathisGarberg/angular-folder-structure';

  public isDarkTheme$: Observable<boolean>;

  navItems = [
    { link: '/dashboard/home', title: 'MeterError' },
    { link: '/report', title: 'Load' },
    { link: '/contact', title: 'Meter' }
  ];


  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isDarkTheme$ = this.themeService.getDarkTheme();
  }

  toggleTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
