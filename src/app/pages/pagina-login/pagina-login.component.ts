import { Component } from '@angular/core';
import { LoginLayoutComponent } from '../../components/login-layout/login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagina-login',
  standalone: true,
  imports: [
    LoginLayoutComponent,
    ReactiveFormsModule
  ],
  templateUrl: './pagina-login.component.html',
  styleUrl: './pagina-login.component.scss'
})
export class PaginaLoginComponent {
  loginForm!: FormGroup;

  constructor(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

}
