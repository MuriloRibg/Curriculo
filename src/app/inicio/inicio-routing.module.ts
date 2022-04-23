import { HomeComponent } from './page/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const rotas: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(rotas)]
})
export class InicioRoutingModule { }
