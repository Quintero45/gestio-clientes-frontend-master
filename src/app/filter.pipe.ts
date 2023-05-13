import { Pipe, PipeTransform } from '@angular/core';
import { car } from './Car';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    const resultado=[];
    for(const paquete of value) {
      if(paquete.codigo.toLowerCase().indexOf(arg)>-1 ){
        resultado.push(car);
      };

    };



    return resultado;


  }





}
