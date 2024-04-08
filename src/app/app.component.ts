import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaLoginComponent } from './pages/pagina-login/pagina-login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaginaLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SalvaPets-Web';
}
