import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import{ CrudService } from 'src/app/service/crud.service'

@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrls: ['./agregar-libro.component.css']
})
export class AgregarLibroComponent {
 /* Recolectamos los datos desde el formulario*/
 formularioDeLibros:FormGroup;

 constructor(public formulario: FormBuilder, 
  private crudService:CrudService, 
  private rutedor:Router){
    this.formularioDeLibros = this.formulario.group({
      isbn:[''],
      titulo:[''],
      autor:[''],
      anio:[''],
      editorial:['']

    });
  }

  enviarDatos(){
    console.log("Presionaste el boton enviar datos");
    console.log(this.formularioDeLibros.value);
    this.crudService.AgregarLibro(this.formularioDeLibros.value).subscribe(respuesta => {
      this.rutedor.navigateByUrl("/listar-libro")

    });


  }

}
