import { Component, OnInit } from '@angular/core';
import { vehiculo } from '../Vehiculo';
import { VehiculoService } from '../Car.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.css']
})
export class ListaPaquetesComponent implements OnInit {


  vehiculos:vehiculo[];

  constructor(private vehiculoServicio : VehiculoService , private router:Router , private route:ActivatedRoute) {}
  filterpack=''


  ngOnInit(): void {
    this.obtenerVehiculos();
  }



  actualizarVehiculo(vehiculo:vehiculo){
    this.router.navigate(['/actualizar-vehiculo',vehiculo]);
  }

  eliminarVehiculo(placa: string){
    if(confirm(" ¿Estas seguro de eliminar este vehiculo?")){
      this.vehiculoServicio.eliminarVehiculo(placa).subscribe(dato =>{
        console.log(dato);
        this.obtenerVehiculos();
      })
    }

  }

  private obtenerVehiculos(){
    this.vehiculoServicio.obtenerListaDeVehiculos().subscribe(dato => {
      this.vehiculos = dato;
    });
  }



}
