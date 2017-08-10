import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activo:boolean = true): any {
    let nombre = value.split(" ");
    let nuevoValor:string ="*";
    for(let i=0; i<value.length; i++){
      nuevoValor += "*";
    }
    if(activo){
      for (let key in nombre) {
        nombre[key] = nombre[key][0].replace(nombre[key][0], nuevoValor);
      }
    }
    return nombre;

    // OTRA OPCION
    // let salida:string ="";
    // if(activo){
    //   for (let i=0; i<value.length; i++) {
    //       salida += "*";
    //   }
    //   return salida;
    // }else{
    //   return value;
    // }
  }

}
