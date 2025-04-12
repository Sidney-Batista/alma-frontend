import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { EnderecoComponent } from './components/endereco/endereco.component';


export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch:'full' },
    { path: 'quem-somos', component:QuemSomosComponent },
    { path: 'endereco', component: EnderecoComponent },
];
