import { Component, OnInit } from '@angular/core';
import { car } from '../Car';
import { CarService } from '../Car.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.css']
})
export class ListaVehiculosComponent implements OnInit {


  Cars:car[];

  constructor(private carServicio : CarService , private router:Router , private route:ActivatedRoute) {}
  filterpack=''


  ngOnInit(): void {
    this.obtenerVehiculos();
  }



  actualizarVehiculo(Car:car){
    this.router.navigate(['/actualizar-vehiculo',car]);
  }

  eliminarVehiculo(plate: string){
    if(confirm(" ¿Estas seguro de eliminar este vehiculo?")){
      this.carServicio.eliminarVehiculo(plate).subscribe(dato =>{
        console.log(dato);
        this.obtenerVehiculos();
      })
    }

  }

  private obtenerVehiculos(){
    this.carServicio.obtenerListaDeVehiculos().subscribe(dato => {
      this.Cars = dato;
    });
  }



}
