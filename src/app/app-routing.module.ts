import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  
  { path: 'invitado', loadChildren: './invitado/invitado.module#InvitadoPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'tabs1', loadChildren: './tabs1/tabs1.module#Tabs1PageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
