import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  template: `
    <ngx-spinner type="ball-scale-multiple"></ngx-spinner>
    <app-header></app-header>
    <router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent implements OnInit{
  constructor(private router: Router, private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.spinner.hide();
    this.router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.spinner.show();
          break;
        }
        case event instanceof NavigationCancel :
        case event instanceof NavigationEnd:
        case event instanceof NavigationError: {
          this.spinner.hide();
        }
      }
    })
  }
}
