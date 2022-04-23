import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CursosComponent } from './page/cursos.component';

const rotas: Routes = [
  {
    path: '',
    component: CursosComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(rotas)],
})
export class CursosRoutingModule { }

