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
    return this.http.post<any>(
      this.urlServidor+'/obtenirusuari',
      {
        email: email,
        passwd: contrassenya
      }
    )
  }

  registrarUsuari(email,contrassenya){
    return this.http.post<any>(
      this.urlServidor+'/registrarusuari',
      {
        email: email,
        passwd: contrassenya
      }
    )
  }



}
