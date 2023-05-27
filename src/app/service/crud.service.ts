import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { libro } from './Libro';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  /*API: string = "http://localhost/libros/"; */
  /* API: string="http://angular-test.eastus.cloudapp.azure.com/libros/" ; */
  API : string = "http://localhost:3000/libros/"


  constructor(private clientehttp:HttpClient) { }

  AgregarLibro(datoslibro:libro): Observable<any>{
    return this.clientehttp.post(this.API, datoslibro)

  }

  ObtenerLibros(){
      return this.clientehttp.get(this.API)
  }

  BorrarLibro(isbn:any){
    return this.clientehttp.delete(this.API + isbn)
  }

  ObtenerLibro(isbn:any):Observable<any>{
    return this.clientehttp.get(this.API + isbn) 
  }

  EditarLibro(isbn:any, datoslibro:any): Observable<any>{
    return this.clientehttp.put(this.API + isbn, datoslibro)
  }




}
