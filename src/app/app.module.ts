import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { ProfesionalService } from './servicios/profesional.service';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProfesionalComponent } from './components/profesional/profesional.component';
import { FormProfesionalComponent } from './components/form-profesional/form-profesional.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfesionalComponent,
    FormProfesionalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProfesionalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
