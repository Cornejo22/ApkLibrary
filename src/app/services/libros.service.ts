import { Injectable } from '@angular/core';
//Importar estos servicios para poder hacer peticiones get,post,delete,patch,etc..
import { HttpClient, HttpHeaders, HttpRequest, XhrFactory } from '@angular/common/http';
import { Libros } from '../class/libros';
import { GLOBAL } from './global.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  public url: string;

  constructor(
    public _http:HttpClient
  ) {
    this.url = GLOBAL.url;
   }


   getLibros(){
     return this._http.get(this.url + '/libros');
   }

   getLibro(id){
    return this._http.get(this.url + '/libro/' + id);
   }
}
