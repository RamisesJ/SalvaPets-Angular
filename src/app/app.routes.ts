import { Routes } from '@angular/router';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { PaginaLoginComponent } from './pages/pagina-login/pagina-login.component';

export const routes: Routes = [
    {
        path: "login",
        component: PaginaLoginComponent
    }
];
