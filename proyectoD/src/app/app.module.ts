import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';

import { RouterModule} from '@angular/router';
import { ROUTES } from './app.routes';
import { RecetasComponent } from './components/recetas/recetas.component';
import { TutorialesComponent } from './components/tutoriales/tutoriales.component';
import { SomosComponent } from './components/somos/somos.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    NavbarComponent,
    CatalogoComponent,
    RecetasComponent,
    TutorialesComponent,
    SomosComponent,
    ContactanosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES,{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
