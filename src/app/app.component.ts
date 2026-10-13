import { Component, inject, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
// import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent implements OnInit{
  private readonly router: Router = inject(Router);

  ngOnInit(): void {
    // this.spinner.hide();
    this.router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationStart: {
          // this.spinner.show();
          break;
        }
        case event instanceof NavigationCancel :
        case event instanceof NavigationEnd:
        case event instanceof NavigationError: {
          // this.spinner.hide();
        }
      }
    })
  }
}
