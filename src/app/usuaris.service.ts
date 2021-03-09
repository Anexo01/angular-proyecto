import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuarisService {

  urlServidor= 'http://localhost:3000';
  usuarivalidat = ''
  constructor(private http: HttpClient) { }

  validarUsuari(email,contrassenya){
    console.log(email,contrassenya + "LOGUEADO");
    return this.http.post<any>(
      this.urlServidor+'/obtenirusuari',
      {
        email: email,
        passwd: contrassenya
      }
    )
    
  }

  registrarUsuari(email,contrassenya){
    console.log(email,contrassenya + "REGISTRADO");
    return this.http.post<any>(
      this.urlServidor+'/insertarusuari',
      {
        email: email,
        passwd: contrassenya,
        usuari_tipus_id : 1,
        activat: 0
      }
    )
  }



}
