import { ExperienciasRoutingModule } from './experiencias-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienciasComponent } from './page/experiencias.component';

@NgModule({
  declarations: [ExperienciasComponent],
  imports: [CommonModule, ExperienciasRoutingModule],
  exports: [ExperienciasRoutingModule],
})
export class ExperienciasModule {}
