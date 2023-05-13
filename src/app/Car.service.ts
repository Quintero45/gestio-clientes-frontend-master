import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { car } from './Car';

@Injectable({
  providedIn: 'root'
})
export class CarService  {
  private baseURL = '//localhost:8080//';


  constructor(private httpClient : HttpClient) { }

  obtenerListaDeVehiculos():Observable<car[]>{
    return this.httpClient.get<car[]>(`${this.baseURL+'searchAll'} `);
  }

  registrarVehiculo(car:car):Observable<Object>{
    return this.httpClient.post(`${this.baseURL+'save_car'}`,car);

  }

  actualizarVehiculo(car:car):Observable<Object>{
    return this.httpClient.put(this.baseURL+'create',car);
  }

  obtenerVehiculo(plate:string):Observable<car>{
    return this.httpClient.get<car>(`${this.baseURL}${'search'}/${plate}`);
  }

  eliminarVehiculo(plate:string):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL }${'delete'}/${plate}`);
  }



}
