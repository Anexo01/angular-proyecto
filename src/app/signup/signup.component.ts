import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarisService } from '../usuaris.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  email: ''
  password: ''
  password2: ''
  constructor(public usuaris: UsuarisService,private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.crearFormulari();
  }
  private crearFormulari(): void {
    this.signupForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        password2: ['', [Validators.required, Validators.minLength(8)]]
      }
    );
  }

  public submit():void{
    const {email, password} = this.signupForm.value;
    this.usuaris.validarUsuari(email,password).subscribe((resultat)=>{
      localStorage.setItem('email',resultat.email);
      localStorage.setItem('token',resultat.token);
      this.ngOnInit();
    })
  }

}
