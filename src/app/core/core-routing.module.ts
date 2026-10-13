import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const rotas: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../inicio/inicio.module').then((x) => x.InicioModule),
  },
  {
    path: 'experiencia',
    loadChildren: () =>
      import('../experiencias/experiencias.module').then(
        (x) => x.ExperienciasModule
      ),
  },
  {
    path: 'cursos',
    loadChildren: () =>
      import('../cursos/cursos.module').then((x) => x.CursosModule),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
