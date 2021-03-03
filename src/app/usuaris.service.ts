import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuarisService {

  urlServidor= 'http://localhost:3000'
  usuarivalidat = ''
  constructor(private http: HttpClient) { }

  validarUsuari(email,contraseña){
    return this.http.post<any>(
      this.urlServidor+'/validar',
      {
        email: email,
        passwd: contraseña
      }
    )
  }

  registrarUsuari(email,contraseña){
    
  }



}
