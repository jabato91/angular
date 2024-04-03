import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SesionComponent } from './sesion/sesion.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [
  {path: '', component: SesionComponent},
  {path: 'inicio', component: SesionComponent},
  {path: 'register', component: RegistrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
