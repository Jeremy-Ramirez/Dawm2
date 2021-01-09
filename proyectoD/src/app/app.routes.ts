import { Routes } from '@angular/router';
import {PrincipalComponent} from './components/principal/principal.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import {TutorialesComponent} from './components/tutoriales/tutoriales.component';
import {SomosComponent} from './components/somos/somos.component';
import {ContactanosComponent} from './components/contactanos/contactanos.component';
//Arreglo de rutas 
export const ROUTES: Routes = [
    { path: 'principal', component: PrincipalComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'recetas', component: RecetasComponent },
    { path: 'tutoriales', component: TutorialesComponent },
    { path: 'somos', component: SomosComponent },
    { path: 'contactanos', component: ContactanosComponent },
    { path: '', pathMatch:'full', redirectTo: 'principal' },
    { path: '**', pathMatch:'full', redirectTo: 'principal' }
];