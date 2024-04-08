import { Routes } from '@angular/router';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { PaginaLoginComponent } from './pages/pagina-login/pagina-login.component';
import { CadastroComponent } from './pages/pagina-cadastro/pagina-cadastro.component';

export const routes: Routes = [
    {
        path: "login",
        component: PaginaLoginComponent
    },
    {
        path: "signup",
        component: CadastroComponent
    }
];
