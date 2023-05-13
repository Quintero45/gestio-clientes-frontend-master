import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaVehiculosComponent } from './lista-vehiculos/lista-vehiculos.component';
import { RegistarVehiculoComponent } from './registar-vehiculo/registar-vehiculo.component';
import { ActualizarVehiculoComponent } from './actualizar-vehiculo/actualizar-vehiculo.component';
import { HomeComponent } from './home/home.component';
import { AñadirDocumentosComponent } from './añadir-documentos/añadir-documentos.component';



const routes: Routes = [
  {path : 'home',
   component:HomeComponent},
  {path : '',
   redirectTo:'home',
   pathMatch:'full'},
  {path: 'registar-vehiculo' , component: RegistarVehiculoComponent},
  {path: 'actualizar-vehiculo', component: ActualizarVehiculoComponent},
  {path: 'catalogo', component: ListaVehiculosComponent},
  {path: 'documentos', component: AñadirDocumentosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
