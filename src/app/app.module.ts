import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { CarService } from './Car.service';
import { MyInterceptorService } from './my-interceptor.service';
import { ActualizarVehiculoComponent } from './actualizar-vehiculo/actualizar-vehiculo.component';
import { ListaVehiculosComponent } from './lista-vehiculos/lista-vehiculos.component';
import { RegistarVehiculoComponent } from './registar-vehiculo/registar-vehiculo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IonicModule } from '@ionic/angular';
import { AñadirDocumentosComponent } from './añadir-documentos/añadir-documentos.component';




@NgModule({
  declarations: [	
    AppComponent,
    ActualizarVehiculoComponent,
    ListaVehiculosComponent,
    RegistarVehiculoComponent,
    FilterPipe,
      HomeComponent,
      LoginComponent,
      RegisterComponent,
      AñadirDocumentosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot()

  ],
  providers: [
    CarService,
    {

      provide: HTTP_INTERCEPTORS,
      useClass:MyInterceptorService,
      multi: true

    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
