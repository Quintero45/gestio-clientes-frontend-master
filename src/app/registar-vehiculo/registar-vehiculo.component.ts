import { Component, OnInit } from '@angular/core';
import { CarService } from '../Car.service';
import { Router } from '@angular/router';
import { car } from '../Car';

@Component({
  selector: 'app-registar-vehiculo',
  templateUrl: './registar-vehiculo.component.html',
  styleUrls: ['./registar-vehiculo.component.css']
})

export class RegistarVehiculoComponent implements OnInit{

  Car: car = new car();
  constructor(private carServicio:CarService, private router:Router){}

  ngOnInit(): void {

  }

  actualizarVehiculo(){
    this.carServicio.registrarVehiculo(this.Car).subscribe( dato =>{
      console.log(dato);
      this.irAlaListaDeVehiculos();
    });
  }

  irAlaListaDeVehiculos(){
    this.router.navigate(['catalogo']);

  }


  onSubmit(){
    this.actualizarVehiculo();
  }







}
