import { Component, OnInit } from '@angular/core';
import { car } from '../Car';

@Component({
  selector: 'app-añadir-documentos',
  templateUrl: './añadir-documentos.component.html',
  styleUrls: ['./añadir-documentos.component.css']
})
export class AñadirDocumentosComponent implements OnInit {
  Car: car = new car();
  constructor() { }

  ngOnInit() {
  }

}
