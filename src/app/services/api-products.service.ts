import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Products} from './../models/products';
import {AutenticarService} from './../services/autenticar.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  public URL_PRODUCTS = 'https://dummyjson.com/auth/products'
  public datosProductos : Products | null | Observable<null> = null;

  constructor(
    private cliente : HttpClient,
    private auth : ApiProductsService
  ) { }

  public obtenerProductos(){
    this.cliente.get<Products>(this.URL_PRODUCTS,{
      headers :{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.auth.obtenerToken
      }
    }).subscribe((datos)=>{
      if(datos){
        this.datosProductos = datos,
         console.log('mensaje de prueba')
      }
    })
  }

  public obtenerDatosUsuario(){
    return this.datosProductos
  }

  public obtenerToken(){
    return this.auth.obtenerToken
  }


}
