import { RouterModule } from '@angular/router';
import { HeaderModule } from './components/header/header.module';
import { CoreRoutingModule } from './core-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    HeaderModule,
    RouterModule
  ],
  exports: [
    HeaderModule,
  ]
})
export class CoreModule { }
