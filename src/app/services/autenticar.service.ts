import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Auth, AuthRespuesta} from './../models/auth';
import { catchError, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  public URL_AUTH = 'https://dummyjson.com/auth/login'
  public datosUsuario: AuthRespuesta | null| Observable<null> = null;

  constructor(
    private cliente : HttpClient
  ) { }



  public autenticar({username, password}:Auth){
    this.cliente.post<AuthRespuesta>(this.URL_AUTH,{
      username,
      password
    },{
      headers : {
        'Content-Type':'application/json',
      }
    }).subscribe(async(datos)=>{
      if(datos){
        this.datosUsuario = datos;
      }
    })
  }

  public obtenerToken(){
    return (this.datosUsuario as AuthRespuesta).token

  }



}
