import { ExperienciasComponent } from './page/experiencias.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const rotas: Routes = [
  {
    path: '',
    component: ExperienciasComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(rotas)],
})
export class ExperienciasRoutingModule {}
