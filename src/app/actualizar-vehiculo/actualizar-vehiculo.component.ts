import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { car } from '../Car';
import { CarService } from '../Car.service';




@Component({
  selector: 'app-actualizar-vehiculo',
  templateUrl: './actualizar-vehiculo.component.html',
  styleUrls: ['../../styles.css']
})
export class ActualizarVehiculoComponent implements OnInit{

  plate:string;
  Car:car = new car();
  constructor(private carServicio:CarService , private router:Router,private route:ActivatedRoute){}


  ngOnInit(): void {
    this.plate =  this.route.snapshot.params['plate'];
    this.carServicio.obtenerVehiculo(this.plate).subscribe(dato =>{
      this.Car = dato;
    });
  }




  irAlaListaDeVehiculos(){
    this.router.navigate(['catalogo']);
  }



  onSubmit(){
    this.carServicio.actualizarVehiculo(this.Car).subscribe(dato => {
      this.irAlaListaDeVehiculos();
    })
  }




}
