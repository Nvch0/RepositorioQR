import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'codigqr',
    loadChildren: () => import('./codigqr/codigqr.module').then( m => m.CodigqrPageModule)
  },
  {
    path: 'bitacora',
    loadChildren: () => import('./bitacora/bitacora.module').then( m => m.BitacoraPageModule)
  },
  {
    path: 'bitacorasiguiente',
    loadChildren: () => import('./bitacorasiguiente/bitacorasiguiente.module').then( m => m.BitacorasiguientePageModule)
  },
  {
    path: 'alumnoregistro',
    loadChildren: () => import('./alumnoregistro/alumnoregistro.module').then( m => m.AlumnoregistroPageModule)
  },
  {
    path: 'camaraalumno',
    loadChildren: () => import('./camaraalumno/camaraalumno.module').then( m => m.CamaraalumnoPageModule)
  },
  {
    path: 'asistenciapersonal',
    loadChildren: () => import('./asistenciapersonal/asistenciapersonal.module').then( m => m.AsistenciapersonalPageModule)
  },
  {
    path: 'pagmaqueta',
    loadChildren: () => import('./pagmaqueta/pagmaqueta.module').then( m => m.PagmaquetaPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
