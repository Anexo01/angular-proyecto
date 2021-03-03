import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarisService } from '../usuaris.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  email: ''
  password: ''
  constructor(public usuaris: UsuarisService,private fb: FormBuilder,) { }
  ngOnInit(): void {
    this.crearFormulari();
  }
  private crearFormulari(): void {
    this.loginForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      }
    );
  }
  public submit():void{
    const {email, password} = this.loginForm.value;
    this.usuaris.validarUsuari(email,password).subscribe((resultat)=>{
      localStorage.setItem('email',resultat.email);
      localStorage.setItem('token',resultat.token);
      this.ngOnInit();
    })
  }
}
